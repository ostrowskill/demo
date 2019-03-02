import Vue from 'vue'
import Vuex from 'vuex'

// THEMES SECTION 

import {
  THEME
} from './themes/constans';
import dark from './themes/dark';
import light from './themes/light';

const theme = {
  dark,
  light
}

const defaultTheme = THEME.light;
//
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    domains: [{
        name: 'www.domena.pl',
        desc: 'some desc',
        dataPoints: [
          [70, 20, 12, 39, 100, 40, 95, 80, 80, 20, 12, 100],
          [205, 308, 190, 205, 58, 150, 35, 150, 164, 202, 50, 30]
        ],
        doughnutPointes: [10, 50]
      },
      {
        name: 'www.domena-two.pl',
        desc: 'other desc',
        dataPoints: [
          [20, 50, 12, 30, 5, 40, 30, 60, 20, 30, 10, 35],
          [25, 20, 60, 10, 25, 2, 45, 15, 65, 20, 50, 25]
        ],
        doughnutPointes: [40, 60]
      },
    ],

    userData: {
      domains: [{
          name: 'www.domena.pl',
          performanceData: {
            lineChart: {
              googleAds: {
                label: 'Google Ads.',
                chartPoints: [123442, 130502, 150498, 136434, 140532, 160503, 170949, 190549, 180495, 212390, 230589, 260349]
              },
              facebookAds: {
                label: 'Facebook Ads',
                chartPoints: [33232, 50493, 70595, 60506, 71030, 33232, 54060, 120304, 150304, 304902, 124589, 203050]
              },
              organic: {
                label: 'Organic',
                chartPoints: [53535, 58888.5, 64777.35, 71255.085, 78380.5935, 90137.68253, 103658.3349, 119207.0851, 137088.1479, 157651.3701, 181299.0756, 208493.937]
              },
              homebook: {
                label: 'Homebook',
                chartPoints: [23252, 25398, 32030, 32059, 35060, 37040, 40495, 42050, 46506, 52003, 55060, 59020]
              },
              newsletter: {
                label: 'Newsletter',
                chartPoints: [70607, 70607, 70607, 70607, 70607, 240120, 70607, 70607, 70607, 70607, 70607, 70607]
              }
            },
            doughnutChart: {
              labels: ["Google Ads", "Facebook Ads", "Organic", "Homebook", "Newsletter", "Other"],
              chartPoints: [30, 20, 15, 5, 12, 18]
            }
          },
          devOps: {
            lineChart: {
              label: 'Server requests',
              chartPoints: [24633, 27096.3, 29805.93, 32786.523, 36065.1753, 39671.69283, 43638.86211, 48002.74832, 67203.84765, 94085.38672, 103493.9254, 113843.3179, 125227.6497, 137750.4147, 179075.5391, 232798.2008, 302637.6611, 340024, 272019.2, 217615.36, 130569.216, 78341.5296, 47004.91776, 35034]
            }
          },
          buisness: {
            lineChart: {
              orders: {
                label: 'Orders number',
                chartPoints: [123442, 130502, 150498, 136434, 140532, 160503, 170949, 190549, 180495, 212390, 230589, 260349]
              },
              checkout: {
                label: 'Avg. checkout',
                chartPoints: [33232, 50493, 70595, 60506, 71030, 33232, 54060, 120304, 150304, 304902, 124589, 203050]
              }
            },
            barChart: {
              labels: ["Google Ads.", "Facebook Ads", "Organic", "Homebook", "Newsletter", "Other"],
              chartPoints: [15, 17, 20, 15, 14, 13]
            }
          }
        },
        {
          name: 'www.domena-two.pl',
          performanceData: {
            lineChart: {
              googleAds: {
                label: 'Google Ads.',
                chartPoints: [93442, 60502, 100498, 116434, 140532, 160503, 170949, 190549, 180495, 212390, 230589, 260349]
              },
              facebookAds: {
                label: 'Facebook Ads',
                chartPoints: [13232, 30493, 50595, 30506, 61030, 43232, 34060, 80304, 120304, 224902, 124589, 203050]
              },
              organic: {
                label: 'Organic',
                chartPoints: [53535, 58888.5, 64777.35, 71255.085, 78380.5935, 90137.68253, 103658.3349, 119207.0851, 137088.1479, 157651.3701, 181299.0756, 208493.937]
              },
              homebook: {
                label: 'Homebook',
                chartPoints: [23252, 25398, 32030, 32059, 35060, 37040, 40495, 42050, 46506, 52003, 55060, 59020]
              },
              newsletter: {
                label: 'Newsletter',
                chartPoints: [70607, 70607, 70607, 70607, 70607, 120120, 70607, 70607, 70607, 70607, 70607, 70607]
              }
            },
            doughnutChart: {
              labels: ["Google Ads", "Facebook Ads", "Organic", "Homebook", "Newsletter", "Other"],
              chartPoints: [1, 12, 8, 2, 12, 4]
            }
          },
          devOps: {
            lineChart: {
              label: 'Server requests',
              chartPoints: [13633, 20096.3, 17805.93, 13786.523, 21065.1753, 26671.69283, 26638.86211, 33002.74832, 41203.84765, 45085.38672, 103493.9254, 113843.3179, 125227.6497, 137750.4147, 179075.5391, 232798.2008, 210637.6611, 180024, 144019.2, 217615.36, 130569.216, 78341.5296, 47004.91776, 35034]
            }
          },
          buisness: {
            lineChart: {
              orders: {
                label: 'Orders number',
                chartPoints: [123442, 130502, 150498, 136434, 140532, 160503, 170949, 190549, 180495, 212390, 230589, 260349]
              },
              checkout: {
                label: 'Avg. checkout',
                chartPoints: [12232, 22493, 45595, 22506, 14030, 8232, 27060, 44304, 67304, 48902, 22589, 23050]
              }
            },
            barChart: {
              labels: ["Google Ads.", "Facebook Ads", "Organic", "Homebook", "Newsletter", "Other"],
              chartPoints: [2, 10, 12, 15, 8, 3]
            }
          }
        }
      ]
    },

    reloadCharts: 0,
    selected: 'www.domena.pl',

    // THEMES SECTION

    themeName: theme[defaultTheme].themeName,

    //new palette
    //charts colors
    ch_color__primary: theme[defaultTheme].ch_color__primary,
    ch_color__secondary: theme[defaultTheme].ch_color__secondary,
    ch_color__third: theme[defaultTheme].ch_color__third,
    ch_color__fourth: theme[defaultTheme].ch_color__fourth,
    ch_color__fifth: theme[defaultTheme].ch_color__fifth,
    //grays
    g_color__primary: theme[defaultTheme].g_color__primary,
    g_color__secondary: theme[defaultTheme].g_color__secondary,
    g_color__third: theme[defaultTheme].g_color__third,
    //font-color
    f_color__primary: theme[defaultTheme].f_color__primary,
    f_color__secondary: theme[defaultTheme].f_color__secondary,
    //main gold
    m_color__primary: theme[defaultTheme].m_color__primary,
  },
  getters: {
    selectedDomain(state) {
      return state.selected;
    },

    //tst filter new data
    filterData(state, getters) {
      return state.userData.domains.filter(domain => {
        return domain.name == getters.selectedDomain;
      })
    },






    filteredByDomain(state, getters) {
      return state.domains.filter(domain => {
        return domain.name == getters.selectedDomain;
      })
    }
  },
  mutations: {
    // THEMES SWITCH

    switchTheme(state, themeName) {
      // theme name
      state.themeName = theme[themeName].themeName;

      //new palette
      //colors
      state.ch_color__primary = theme[themeName].ch_color__primary,
      state.ch_color__secondary = theme[themeName].ch_color__secondary,
      state.ch_color__third = theme[themeName].ch_color__third,
      state.ch_color__fourth = theme[themeName].ch_color__fourth,
      state.ch_color__fifth = theme[themeName].ch_color__fifth,
      //grays
      state.g_color__primary = theme[themeName].g_color__primary,
      state.g_color__secondary = theme[themeName].g_color__secondary,
      state.g_color__third = theme[themeName].g_color__third,
      //font-color
      state.f_color__primary = theme[themeName].f_color__primary,
      state.f_color__secondary = theme[themeName].f_color__secondary,
      //main gold
      state.m_color__primary = theme[themeName].m_color__primary
    }
  }
})
