/**
 * @vitest-environment happy-dom
 */
 import { createPinia, setActivePinia } from "pinia";
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import { createTestingPinia } from '@pinia/testing'
 import AddProduct from '../AddProduct.vue';

describe('Add product', () => {

    /*beforeEach(() => {
        setActivePinia(createPinia());
    });*/

    it('it renders the page', () => {

        const wrapper = mount(AddProduct, {

            global: {
              plugins: [createTestingPinia()],
            },

          });
    });

      it("should save the data sent", async () => {

        const wrapper = mount(AddProduct, {
          global: {
            plugins: [createTestingPinia()],
          },
        });

        const input = wrapper.find("input.form__input")
          
        await input.setValue('item test')
    
        await wrapper.find("input.form__input").trigger("click");
    
        expect(input.element.value).toBe('item test')
    
      });

});

