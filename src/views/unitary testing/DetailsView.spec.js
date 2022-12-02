/**
 * @vitest-environment happy-dom
 */
 import { createPinia, setActivePinia } from "pinia";
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import { createTestingPinia } from '@pinia/testing'
 import Details from '../DetailsView.vue';
 
 describe('Home View', () => {
 
     it("Renders", () => {
         const wrapper = mount(Details, {
             global: {
               plugins: [createTestingPinia()],
             },
           })
     })
 
 });