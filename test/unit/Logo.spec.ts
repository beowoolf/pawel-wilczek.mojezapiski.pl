import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import Logo from '../../app/components/Logo.vue'

const NuxtImgStub = defineComponent({
  name: 'NuxtImg',
  props: {
    src: String,
    alt: String,
    title: String,
    format: String,
    preload: [Boolean, String],
  },
  setup(props) {
    return () =>
      h('img', { src: props.src, alt: props.alt, title: props.title })
  },
})

describe('Logo', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Logo, {
      global: {
        stubs: {
          NuxtImg: NuxtImgStub,
        },
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
