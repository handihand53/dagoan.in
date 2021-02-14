import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import NavBar from '@/components/home/NavBar.vue'
import Vue from 'vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const mocks = {
  $route: {
    params: {
      projectId: 'sds'
    }
  }
}

describe('NavBar.vue', () => {
  test('NavBar page should render correctly', () => {
    const wrapper = shallowMount(NavBar, {
      localVue,
      mocks,
      stubs: ['router-link', 'font-awesome-icon']
    })
    expect(wrapper.exists()).toBe(true)
  })
})
