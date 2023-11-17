module.exports = {
  docs: [
    'welcome',
    {
      type: 'category',
      label: 'About Mina',
      items: [
        'about-mina/index',
        'about-mina/what-are-zero-knowledge-proofs',
        'about-mina/protocol-architecture',
        'about-mina/consensus',
        'about-mina/faq',
        {
          type: 'link',
          label: 'Whitepaper',
          href: 'https://minaprotocol.com/wp-content/uploads/economicsWhitepaper.pdf',
        },
      ],
    },
    {
      type: 'category',
      label: 'Using Mina',
      items: [
        'using-mina/install-a-wallet',
        'using-mina/ledger-hardware-wallet',
        'using-mina/how-to-send-and-receive',
        'using-mina/how-to-delegate',
        'using-mina/how-to-use-zkapp',
      ],
    },
    {
      type: 'category',
      label: 'zkApp Developers',
      items: [
        'zkapps/index',
        'zkapps/getting-started-zkapps',
        'zkapps/install-zkapp-cli',
        'zkapps/how-zkapps-work',
        {
          type: 'category',
          label: 'Creating zkApps',
          items: [
            'zkapps/how-to-write-a-zkapp',
            'zkapps/how-to-test-a-zkapp',
            'zkapps/how-to-deploy-a-zkapp',
            'zkapps/how-to-write-a-zkapp-ui',
          ],
        },
        {
          type: 'category',
          label: 'o1js',
          items: [
            'zkapps/o1js/index',
            'zkapps/o1js/basic-concepts',
            'zkapps/o1js/smart-contracts',
            'zkapps/o1js/interact-with-mina',
            'zkapps/o1js/events',
            'zkapps/o1js/actions-and-reducer',
            'zkapps/o1js/fetch-events-and-actions',
            'zkapps/o1js/on-chain-values',
            'zkapps/o1js/recursion',
            'zkapps/o1js/custom-tokens',
            'zkapps/o1js/gadgets',
            'zkapps/o1js/merkle-tree',
            'zkapps/o1js/permissions',
            'zkapps/o1js/time-locked-accounts',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'zkapps/tutorials/index',
            'zkapps/tutorials/hello-world',
            'zkapps/tutorials/private-inputs-hash-functions',
            'zkapps/tutorials/deploying-to-a-network',
            'zkapps/tutorials/zkapp-ui-with-react',
            'zkapps/tutorials/common-types-and-functions',
            'zkapps/tutorials/offchain-storage',
            'zkapps/tutorials/oracle',
            'zkapps/tutorials/custom-tokens',
            'zkapps/tutorials/recursion',
            'zkapps/tutorials/account-updates',
            'zkapps/tutorials/advanced-account-updates',
            'zkapps/tutorials/anonymous-message-board',
            'zkapps/tutorials/interacting-with-zkapps-server-side',
          ],
        },
        {
          type: 'category',
          label: 'o1js Reference',
          items: [
            {
              type: 'doc',
              id: 'zkapps/o1js-reference/README',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'zkapps/o1js-reference/modules',
              label: 'Overview',
            },
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/AccountUpdate',
                  label: 'AccountUpdate',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Bool',
                  label: 'Bool',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Character',
                  label: 'Character',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Circuit',
                  label: 'Circuit',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/CircuitString',
                  label: 'CircuitString',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/CircuitValue',
                  label: 'CircuitValue',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Field',
                  label: 'Field',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Group',
                  label: 'Group',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Int64',
                  label: 'Int64',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Keypair',
                  label: 'Keypair',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Ledger',
                  label: 'Ledger',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/MerkleMap',
                  label: 'MerkleMap',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/MerkleMapWitness',
                  label: 'MerkleMapWitness',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/MerkleTree',
                  label: 'MerkleTree',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Nullifier',
                  label: 'Nullifier',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/PrivateKey',
                  label: 'PrivateKey',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Proof',
                  label: 'Proof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Scalar',
                  label: 'Scalar',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/SelfProof',
                  label: 'SelfProof',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Sign',
                  label: 'Sign',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Signature',
                  label: 'Signature',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/SmartContract',
                  label: 'SmartContract',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Token',
                  label: 'Token',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/TokenSymbol',
                  label: 'TokenSymbol',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/Types.PublicKey',
                  label: 'Types.PublicKey',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/UInt32',
                  label: 'UInt32',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/UInt64',
                  label: 'UInt64',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/classes/VerificationKey',
                  label: 'VerificationKey',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/interfaces/Mina.TransactionId',
                  label: 'Mina.TransactionId',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/interfaces/Permissions',
                  label: 'Permissions',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/interfaces/Provable',
                  label: 'Provable',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/interfaces/ProvablePure',
                  label: 'ProvablePure',
                },
              ],
            },
            {
              type: 'category',
              label: 'Modules',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/Encoding',
                  label: 'Encoding',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/Encryption',
                  label: 'Encryption',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/Experimental',
                  label: 'Experimental',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/Lightnet',
                  label: 'Lightnet',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/Mina',
                  label: 'Mina',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/Pickles',
                  label: 'Pickles',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/Snarky',
                  label: 'Snarky',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/Types.Json',
                  label: 'Types.Json',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/Types',
                  label: 'Types',
                },
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/modules/ZkProgram',
                  label: 'ZkProgram',
                },
              ],
            },
            {
              type: 'category',
              label: 'Enums',
              items: [
                {
                  type: 'doc',
                  id: 'zkapps/o1js-reference/enums/FieldType',
                  label: 'FieldType',
                },
              ],
            },
          ],
        },
        'zkapps/roadmap',
        'zkapps/faq',
        'zkapps/zkapps-for-ethereum-developers',
      ],
    },
    {
      type: 'category',
      label: 'Mina Protocol',
      items: [
        'mina-protocol/proof-of-stake',
        'mina-protocol/whats-in-a-block',
        'mina-protocol/block-producers',
        'mina-protocol/snark-workers',
        'mina-protocol/scan-state',
        'mina-protocol/hardforks',
        'mina-protocol/time-locked-accounts',
        'mina-protocol/sending-a-payment',
        'mina-protocol/lifecycle-of-a-payment',
      ],
    },
    {
      type: 'category',
      label: 'Node Operators',
      items: [
        'node-operators/index',
        {
          type: 'category',
          label: 'Delegation Program',
          items: [
            'node-operators/foundation-delegation-program',
            'node-operators/delegation-tiebreak',
            'node-operators/bp-sidecar',
            'node-operators/uptime-tracking-system',
          ],
        },
        'node-operators/getting-started',
        'node-operators/generating-a-keypair',
        'node-operators/connecting-to-the-network',
        'node-operators/connecting-to-devnet',
        'node-operators/staking-and-snarking',
        'node-operators/hot-cold-block-production',
        'node-operators/seed-peers',
        'node-operators/staking-service-guidelines',
        'node-operators/mina-signer',
        {
          type: 'category',
          label: 'Data and History',
          items: [
            'node-operators/querying-data',
            'node-operators/archive-node',
            'node-operators/archive-redundancy',
            'node-operators/rosetta',
          ],
        },
        'node-operators/mina-cli-reference',
        'node-operators/troubleshooting',
        'node-operators/faq',
      ],
    },
    {
      type: 'category',
      label: 'Node Developers',
      items: [
        'node-developers/index',
        'node-developers/codebase-overview',
        'node-developers/repository-structure',
        'node-developers/bip44',
        'node-developers/code-review-guidelines',
        'node-developers/style-guide',
        'node-developers/sandbox-node',
        'node-developers/graphql-api',
        'node-developers/contributing',
        'node-developers/logging',
      ],
    },
    {
      type: 'category',
      label: 'Exchange Operators',
      items: ['exchange-operators/rosetta2', 'exchange-operators/faq'],
    },
    {
      type: 'category',
      label: 'Testworld Mission 2.0',
      items: [
        'test-world-2/node-operator-responsibilities',
        'test-world-2/technical-requirements',
        'test-world-2/test-plan',
        'test-world-2/timelines',
        'test-world-2/incentives',
        'test-world-2/bug-reporting',
        'test-world-2/launching-a-node',
        'test-world-2/questions',
      ],
    },
    {
      type: 'category',
      label: 'Participate',
      items: [
        'participate/online-communities',
        'participate/office-hours',
        'participate/grants-and-programs',
        'participate/careers',
        'participate/github',
        'participate/bugs-and-feature-requests',
      ],
    },
    'glossary',
  ],
};
