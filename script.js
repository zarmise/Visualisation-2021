const url = 'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json'

fetch(url)
.then(async function (response) {
  const data = await response.json()

	createMap(data.features)
})
.catch(function (err) {
	console.warn('Something went wrong.', err)
})


function createMap(data) {  
  const map = new Datamap({ 
    scope: 'world',
    element: document.getElementById('map'),
    responsive: true,
    fills: {
      Low: 'green',
      Medium: 'yellow',
      High: 'orange',
      VeryHigh: 'red',
      defaultFill: '#ccc'
    },
    data: getFillColors(data),
    geographyConfig: {
      popupTemplate: function(geo, data) {
        return [
          '<div class="hoverinfo">',
            `<div class="hoverinfo-title"><img class="flag-small" src="${getCountryFlagImage(geo.id)}" /><strong>${geo.properties.name}</strong></div>`,
            `<div>Active: ${data.active}</div>`,
            `<div>Confirmed: ${data.confirmed}</div>`,
            `<div>Deaths: ${data.deaths}</div>`,
            `<div>Recovered: ${data.recovered}</div>`,
          '</div>'
        ]
        .join('');
      }
    },
    done: function(datamap) {
      datamap
        .svg
        .selectAll('.datamaps-subunit')
        .on('click', function(geography) {
          const ISO3 = geography.id
          const countryData = data.find(item => item.attributes.ISO3 === ISO3)

          if (!countryData) {
            return
          }

          showData(countryData.attributes)
        })
    }
  })

  d3.select(window).on('resize', function() {
    map.resize()
  })

  window.addEventListener('resize', function() {
    map.resize();
  })
}

function getFillColors(countries) {
  const list = {}


  for (let country of countries) {

    let color
    const rate = country.attributes.Incident_Rate

    if (rate < 300) {
      color = 'Low'
    }

    if (rate >= 300 && rate < 700) {
      color = 'Medium'
    }

    if (rate >= 700 && rate < 1500) {
      color = 'High'
    }

    if (rate >= 1500) {
      color = 'VeryHigh'
    }

    list[country.attributes.ISO3] = {
      fillKey: color,
      active: country.attributes.Active,
      confirmed: country.attributes.Confirmed,
      recovered: country.attributes.Recovered,
      deaths: country.attributes.Deaths,
    }
  }

  return list
}


function getCountryFlagImage(iso3) {
  const iso2 = CountriesList.find(item => item.iso3 === iso3).iso2

  return `https://raw.githubusercontent.com/lipis/flag-icon-css/master/flags/4x3/${iso2.toLowerCase()}.svg`
}

function showData(country) {
  const iso2 = CountriesList.find(item => item.iso3 === country.ISO3).iso2

  document.getElementById('flag').src = getCountryFlagImage(country.ISO3)

  document.getElementById('data').style.display = 'block'
  
  document.getElementById('country-name').innerText = country.Country_Region

  document.getElementById('active').innerText = country.Active
  document.getElementById('confirmed').innerText = country.Confirmed
  document.getElementById('recovered').innerText = country.Recovered
  document.getElementById('deaths').innerText = country.Deaths
  document.getElementById('rate').innerText = country.Incident_Rate.toFixed(2)
}