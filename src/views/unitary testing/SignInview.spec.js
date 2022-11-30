/**
 * @vitest-environment happy-dom
 */
 import { createPinia, setActivePinia } from "pinia";
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import { createTestingPinia } from '@pinia/testing'
 import SignIn from '../SignInView.vue';

 describe('Sign In View', () => {

    it("Renders", () => {

        const wrapper = mount(SignIn, {
            global: {
              plugins: [createTestingPinia()],
            },
          })

    })

   /* it("should save the data sent", async () => {

        const wrapper = mount(SignIn, {
          global: {
            plugins: [createTestingPinia()],
          },
        });

        const input = wrapper.find("input.form__loginInput")
          
        await input.setValue('item test')
    
        await wrapper.find("input.form__loginInput").trigger("click");
    
        expect(input.element.value).toBe('item test')
    
      });*/

});