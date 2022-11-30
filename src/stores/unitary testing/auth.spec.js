/**
 * @vitest-environment happy-dom
 */../authentication
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, vitest } from "vitest";
import { useAuthenticationStore } from "../authentication";

describe("Auth Store", () => {
    vi.mock("firebase/auth", () => {
        const signInWithEmailAndPassword = vitest.fn(() => Promise.resolve({ user: "1234" }));
        const createUserWithEmailAndPassword = vitest.fn(() => Promise.resolve({ user: "1234" }));
        const signOut = vitest.fn(() => Promise.resolve(undefined));

        return {
            signInWithEmailAndPassword,
            createUserWithEmailAndPassword,
            signOut,
        };
    });

    vi.mock("../firebase/config", () => ({ auth: "mock" }))

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("new user await fn", async() => {
        const authentication = useAuthenticationStore();

        console.log = vitest.fn()

        await authentication.newUserAwait('email', 'pass')
    

        expect(console.log).toHaveBeenCalledWith('usuario creado', '1234');
    });

    it("User is null", () => {
        const authentication = useAuthenticationStore();

        expect(authentication.user).toBeNull();
    });
});