/**
 * @vitest-environment happy-dom
 */
 import { createPinia, setActivePinia } from "pinia";
 import { beforeEach, describe, expect, vitest } from "vitest";
 import { useFirestoreStore } from "../firebase";

describe("Firestore store", () => {

    vi.mock("../firebase/firebase", () => ({ db: "mock" }))

    vi.mock("../firebase/db", () => {
        const setDoc = vitest.fn(() => Promise.resolve({ title: "Products" }));
        const addProduct = vitest.fn(() => Promise.resolve({ title: "Products" }));
        const getProducts = vitest.fn(() => [{ title: "Products1" }, { title: "Products2" }]);
        const getIndiProduct = vitest.fn(() => { title: "Products1" });
        const getUser = vitest.fn(() => { user: "1234" });
        const editProduct = vitest.fn(() => { product: "Products" });

        return {
            setDoc,
            addProduct,
            getProducts,
            getIndiProduct,
            getUser,
            editProduct,
        };
    });

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    test("Product and user has been added"), async () => {
        const firestore = useFirestoreStore();

        console.log = vitest.fn();

        await firestore.setDoc(doc(db, "products", 'id'), 'product');

        expect(console.log).toHaveBeenCalledWith("product added");
    }

    test("products load correctly", async () => {
        const firestore = useFirestoreStore();

        const product = await firestore.getProducts();

        expect(product).not.toBeNull();
    });

    test("Individual loads correctly", async () => {
        const firestore = useFirestoreStore();

        const IndiProduct = await firestore.getIndiProduct('id');

        expect(IndiProduct).not.toBeNull();
    });

    test("Get user correctly", async () => {
        const firestore = useFirestoreStore();

        const user = await firestore.getUser('id');

        expect(user).not.toBeNull();
    });
});