/**
 * @vitest-environment happy-dom
 */
import { createPinia, setActivePinia } from "pinia";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createTestingPinia } from '@pinia/testing'
import HomeView from '../HomeView.vue';

describe('Home View', () => {

    it("Renders", () => {
        const wrapper = mount(HomeView, {
            global: {
              plugins: [createTestingPinia()],
            },
          })
    })

});