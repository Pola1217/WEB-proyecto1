/**
 * @vitest-environment happy-dom
 */
 import { createPinia, setActivePinia } from "pinia";
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import { createTestingPinia } from '@pinia/testing'
 import faves from '../faves.vue';

describe("Faves ", () => {

   it("Renders", () => {
       const wrapper = mount(faves, {
           global: {
             plugins: [createTestingPinia()],
           },
         });
   })

})