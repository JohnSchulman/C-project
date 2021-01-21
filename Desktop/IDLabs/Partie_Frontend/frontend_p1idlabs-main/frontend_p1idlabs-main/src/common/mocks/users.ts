import { UserEnriched } from "common/models/user";

export const users: UserEnriched[] = [
  {
    id: 1,
    firstname: "Rael",
    lastname: "CALITRO",
    roles: [
      {
        id: 2,
        name: "student",
      },
    ],
    levels: [
      {
        id: 1,
        name: "mes codes",
        sourceCodes: [
          {
            id: 1,
            name: "code perso 1",
            content: "code perso",
            success: true,
          },
          {
            id: 2,
            name: "code 2",
            content:
              "<div\nclassName={classNames(styles.wrapper, cssClasses)}\nonClick={onClick}\ntitle={title}",
            success: false,
          },
        ],
      },
      {
        id: 2,
        name: "niveau 1",
        sourceCodes: [
          {
            id: 1,
            name: "code lorem ipsum lorem ipsum 1",
            content: "Lorem ipsum\nlorem ipsum blabla\nconsole.log",
            success: true,
          },
          {
            id: 2,
            name: "code 2",
            content:
              "<div\nclassName={classNames(styles.wrapper, cssClasses)}\nonClick={onClick}\ntitle={title}",
            success: false,
          },
        ],
      },
      {
        id: 3,
        name: "niveau 2",
        sourceCodes: [
          {
            id: 1,
            name: "code 1",
            content: "Lorem ipsum",
            success: true,
          },
          {
            id: 2,
            name: "code 2",
            content: "Lorem ipsum",
            success: true,
          },
          {
            id: 3,
            name: "code 3",
            content: "Lorem ipsum",
            success: false,
          },
        ],
      },
      {
        id: 4,
        name: "niveau 3",
        sourceCodes: [
          {
            id: 1,
            name: "code 1",
            content: "Lorem ipsum",
            success: false,
          },
          {
            id: 2,
            name: "code 2",
            content: "Lorem ipsum",
            success: false,
          },
        ],
      },
      {
        id: 5,
        name: "niveau 4",
        sourceCodes: [
          {
            id: 1,
            name: "code 1",
            content: "Lorem ipsum",
            success: false,
          },
          {
            id: 2,
            name: "code 2",
            content: "Lorem ipsum",
            success: false,
          },
          {
            id: 3,
            name: "code 3",
            content: "Lorem ipsum",
            success: false,
          },
          {
            id: 4,
            name: "code lorem ipsum lorem ipsum 4",
            content: "Lorem ipsum",
            success: false,
          },
          {
            id: 5,
            name: "code lorem ipsum lorem ipsum 5",
            content: "Lorem ipsum",
            success: false,
          },
        ],
      },
      {
        id: 6,
        name: "niveau 5",
        sourceCodes: [
          {
            id: 1,
            name: "code 1",
            content: "Lorem ipsum",
            success: false,
          },
          {
            id: 2,
            name: "code 2",
            content: "Lorem ipsum",
            success: false,
          },
        ],
      },
    ],
  },
];
