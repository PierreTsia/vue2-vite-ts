import { shallowMount, Wrapper } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper: Wrapper<Vue> = shallowMount(Navbar)

    expect(wrapper.isVisible()).toEqual(true)
  })
})
