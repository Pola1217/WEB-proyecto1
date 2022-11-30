/**
 * @vitest-environment happy-dom
 */
 import { createPinia, setActivePinia } from "pinia";
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import { createTestingPinia } from '@pinia/testing'
 import footer from '../footer.vue';

describe("Footer ", () => {

   it("Renders", () => {
       const wrapper = mount(footer, {
           global: {
             plugins: [createTestingPinia()],
           },
         });
   })

})