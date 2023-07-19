export type DApp = {
  "version": "0.1.0",
  "name": "d_app",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "update",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": "u64"
        }
      ]
    },
    {
      "name": "increment",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "decrement",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "myAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

export const IDL: DApp = {
  "version": "0.1.0",
  "name": "d_app",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "update",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "data",
          "type": "u64"
        }
      ]
    },
    {
      "name": "increment",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "decrement",
      "accounts": [
        {
          "name": "myAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "myAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "data",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
