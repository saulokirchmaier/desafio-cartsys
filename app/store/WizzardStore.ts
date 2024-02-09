import { produce } from "immer";
import { create } from "zustand";

type Input = {
  id: number;
  label: string;
  value: string;
};

export type Component = {
  id: number;
  type: string;
  label: string;
  inputs?: Input[];
  title?: string;
  content?: string;
  image?: number;
};

export type Page = {
  id: number;
  name: string;
  components?: Component[];
};

export type Wizzard = {
  id: number;
  name: string;
  position: string;
  pages: Page[];
};

type State = {
  wizzards: Record<string, Wizzard>;
};

type Actions = {
  addToWizzard: (id: string, wizzard: Wizzard) => void;
};

type WizzardStore = {
  wizzards: Record<number, Wizzard>;
  addToWizzard: (id: number, newWizzard: Wizzard) => void;
};

const initialItems: State = {
  0: {
    id: 0,
    name: "Cadastro",
    position: "landscape",
    pages: [
      {
        id: 0,
        name: "Usuário",
        components: [
          {
            id: 0,
            type: "form",
            label: "Informções do usuário",
            inputs: [
              {
                id: 0,
                label: "Nome",
                value: "",
              },
              {
                id: 1,
                label: "Email",
                value: "",
              },
            ],
          },
        {
          id: 1,
          type: "card",
          title: "Card",
          content: "Isso é um card"
        }
        ],
      },
      {
        id: 1,
        name: "Imagems",
        components: [
          {
            id: 1,
            type: "image",
            label: "Imagem",
            image: 3
          },
          {
            id: 2,
            type: "image",
            label: "Imagem",
            image: 1
          },
          {
            id: 3,
            type: "image",
            label: "Imagem",
            image: 6
          },
        ],
      },
    ],
  },
  1: {
    id: 1,
    name: "Inputs",
    position: "landscape",
    pages: [
      {
        id: 0,
        name: "pagina 1",
        components: [
          {
            id: 0,
            type: "form",
            label: "Informções do usuário",
            inputs: [
              {
                id: 0,
                label: "Nome",
                value: "",
              },
              {
                id: 1,
                label: "Email",
                value: "",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "pagina 2",
        components: [
          {
            id: 0,
            type: "form",
            label: "Informções do usuário",
            inputs: [
              {
                id: 0,
                label: "CPF",
                value: "",
              },
              {
                id: 1,
                label: "RG",
                value: "",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "pagina 3",
        components: [
          {
            id: 0,
            type: "form",
            label: "Informções do usuário",
            inputs: [
              {
                id: 0,
                label: "CEP",
                value: "",
              },
              {
                id: 1,
                label: "Logradouro",
                value: "",
              },
              {
                id: 2,
                label: "Cidade",
                value: "",
              },
              {
                id: 3,
                label: "Estado",
                value: "",
              },
            ],
          },
        ],
      },
    ],
  },
};


// salva mas se perde ao trocar de página
export const useWizzardStore = create<WizzardStore>((set) => {
  return {
    wizzards: initialItems,
    addToWizzard: (id: number, newWizzard: Wizzard) =>
      set((state) =>
        produce(state, (draft) => {
          draft.wizzards[id] = newWizzard;
        })
      ),
  };
});
