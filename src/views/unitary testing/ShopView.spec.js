/**
 * @vitest-environment happy-dom
 */
 import { createPinia, setActivePinia } from "pinia";
 import { mount } from "@vue/test-utils";
 import { describe, expect, it } from "vitest";
 import { createTestingPinia } from '@pinia/testing'
 import { RouterLinkStub } from '@vue/test-utils';
 import ShopView from '../ShopView.vue';

 describe('Shop View', () => {

    it("Renders", () => {

        const wrapper = mount(ShopView, {
            global: {
              plugins: [createTestingPinia()],
            },

            stubs: {
                RouterLink: RouterLinkStub
            }
          })

    });

    it("should render the edit form when clicking the button", async () => {

        const wrapper = mount(ShopView, {
          global: {
            plugins: [createTestingPinia()],
          },
        });

        await wrapper.find("button.shop__edit").trigger("click");
        expect(wrapper.find("form.form").exists()).toBeTruthy();
        
      });

      /*
      <button class="shop__edit" v-if="admin" @click="openEdit($event, product)">
        EDIT
    </button>*/

      it("should save the data sent in the edit product form", async () => {
        const wrapper = mount(ShopView, {
          global: {
            plugins: [createTestingPinia()],
          },
        });
        await wrapper.find("button#shop__info__edit").trigger("click");
        const nameInput = wrapper.find("input.form__input")
          
        await nameInput.setValue('item test')
    
        await wrapper.find("input.shop__info__edit").trigger("click");
    
        expect(nameInput.element.value).toBe('item test')
    
      });

});