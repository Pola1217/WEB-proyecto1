/**
 * @vitest-environment happy-dom
 */
 import { createPinia, setActivePinia } from "pinia";
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import { createTestingPinia } from '@pinia/testing'
 import banner from '../banner.vue';

describe("Banner ", () => {

   it("Renders", () => {
       const wrapper = mount(banner, {
           global: {
             plugins: [createTestingPinia()],
           },
         });
   })

})