'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaNpm, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { VscExtensions } from 'react-icons/vsc';

interface Package {
  name: string;
  version: string;
  description: string;
  problem: string;
  useCases: string[];
  targetAudience: string;
  npmLink: string;
}

interface Extension {
  name: string;
  status: 'Beta' | 'Released';
  description: string;
  problem: string;
  features: string[];
  useCases: string[];
  targetAudience: string;
  marketplaceLink?: string;
  githubLink: string;
  roadmap?: {
    title: string;
    description: string;
    architecture: string[];
    currentStatus: string;
  };
}

const npmPackages: Package[] = [
  {
    name: 'mcp-dev-kit',
    version: 'v0.2.0',
    description: 'Complete testing & debugging toolkit for MCP servers',
    problem: 'Building MCP servers is painful without proper testing tools. Developers struggle to validate tool responses, debug protocol issues, and ensure their MCP servers work correctly with AI assistants before deployment.',
    useCases: [
      'Unit testing MCP tool handlers',
      'Integration testing MCP server responses',
      'Debugging JSON-RPC communication issues',
      'CI/CD pipeline integration for MCP servers',
    ],
    targetAudience: 'Developers building MCP servers for Claude, GPT, or other AI assistants who need reliable testing infrastructure',
    npmLink: 'https://www.npmjs.com/package/mcp-dev-kit',
  },
  {
    name: 'deveyes',
    version: 'v1.1.0',
    description: 'MCP server giving AI coding assistants visual context',
    problem: 'AI coding assistants like Claude are blind — they can\'t see what your app looks like, what errors appear in the browser, or how your UI renders. They work purely from code, missing critical visual context.',
    useCases: [
      'Let AI see your React/Vue/Angular component renders',
      'Share browser console errors with AI for debugging',
      'Debug visual regressions with AI assistance',
      'Get AI feedback on UI/UX without screenshots',
    ],
    targetAudience: 'Frontend developers who want their AI assistant to understand visual context, not just code',
    npmLink: 'https://www.npmjs.com/package/deveyes',
  },
  {
    name: '@gnana997/node-jsonrpc',
    version: 'v1.0.0',
    description: 'Transport-agnostic JSON-RPC 2.0 client and server',
    problem: 'Most JSON-RPC libraries are tightly coupled to HTTP or WebSocket. When building MCP servers or custom IPC communication, you need a JSON-RPC implementation that works over ANY transport — stdio, Unix sockets, TCP, or custom protocols.',
    useCases: [
      'Building MCP servers that communicate over stdio',
      'Creating language servers (LSP implementations)',
      'IPC communication between Node.js and Go/Rust processes',
      'Microservice communication without HTTP overhead',
    ],
    targetAudience: 'Developers who need JSON-RPC but aren\'t using HTTP — especially those building developer tools, language servers, or MCP integrations',
    npmLink: 'https://www.npmjs.com/package/@gnana997/node-jsonrpc',
  },
  {
    name: 'node-ipc-jsonrpc',
    version: 'v0.2.1',
    description: 'TypeScript JSON-RPC client over IPC for Go servers',
    problem: 'Connecting Node.js/TypeScript applications to Go backend services over IPC is unnecessarily complex. Existing solutions are either HTTP-based (overhead) or require custom protocol handling.',
    useCases: [
      'Node.js frontend calling Go backend over Unix sockets',
      'VS Code extensions communicating with Go language servers',
      'Electron apps with Go backend processes',
      'High-performance local communication without HTTP',
    ],
    targetAudience: 'Developers building TypeScript applications that need to communicate with Go services locally — common in VS Code extensions and CLI tools',
    npmLink: 'https://www.npmjs.com/package/node-ipc-jsonrpc',
  },
  {
    name: 'node-stdio-jsonrpc',
    version: 'v0.1.0',
    description: 'JSON-RPC 2.0 client over stdio (child process)',
    problem: 'Spawning a child process and communicating via stdin/stdout with JSON-RPC is boilerplate-heavy. Managing the process lifecycle, buffering stdio, and handling JSON-RPC framing is tedious.',
    useCases: [
      'MCP client implementations spawning MCP servers',
      'Language server protocol (LSP) clients',
      'CLI tools that wrap other CLI tools',
      'Building VS Code extensions that spawn external tools',
    ],
    targetAudience: 'Developers who need to spawn a process and talk to it via JSON-RPC over stdio — the standard pattern for MCP and LSP',
    npmLink: 'https://www.npmjs.com/package/node-stdio-jsonrpc',
  },
];

const vscodeExtensions: Extension[] = [
  {
    name: 'CassandraLens',
    status: 'Beta',
    description: 'Comprehensive Cassandra GUI extension for VS Code',
    problem: 'Working with Cassandra is painful. You either use DataStax Studio (heavy, separate app), cqlsh (no GUI), or expensive third-party tools. There\'s no lightweight, integrated Cassandra client that lives where developers already work — VS Code.',
    features: [
      'Connection management for multiple clusters',
      'Schema browsing (keyspaces, tables, columns, indexes)',
      'CQL query editor with syntax highlighting',
      'Query result visualization',
      'Kubernetes cluster integration (connect to Cassandra in K8s)',
    ],
    useCases: [
      'Explore Cassandra schemas without leaving VS Code',
      'Run quick CQL queries during development',
      'Connect to Cassandra running in Kubernetes',
      'Debug data issues alongside your code',
    ],
    targetAudience: 'Backend developers working with Cassandra who want a lightweight, integrated database client instead of switching to external tools',
    marketplaceLink: 'https://marketplace.visualstudio.com/items?itemName=gnana997.cassandralens',
    githubLink: 'https://github.com/gnana997/cassandra-lens',
  },
  {
    name: 'Ollama Copilot',
    status: 'Released',
    description: 'Local LLM-powered code completion and chat',
    problem: 'GitHub Copilot and similar tools send your code to the cloud. For developers working on proprietary code, air-gapped environments, or those who simply prefer privacy, there\'s no easy way to get AI code assistance locally.',
    features: [
      'AI-powered code completion using local LLMs',
      'Interactive chat with context from your codebase',
      'Works with any Ollama-supported model (CodeLlama, Mistral, DeepSeek)',
      'Zero data leaves your machine',
      'No subscription required',
    ],
    useCases: [
      'Code completion on proprietary/sensitive codebases',
      'AI assistance in air-gapped environments',
      'Experimenting with different local LLMs for coding',
      'Privacy-conscious development',
    ],
    targetAudience: 'Developers who want AI code assistance but can\'t or won\'t send code to the cloud — security-conscious teams, enterprise developers, or anyone who prefers local-first tools',
    marketplaceLink: 'https://marketplace.visualstudio.com/items?itemName=Gnana997.ollama-dev-companion',
    githubLink: 'https://github.com/gnana997/ollama-copilot',
    roadmap: {
      title: 'Evolving into Archon',
      description: 'A VS Code extension with full codebase semantic understanding for local-first AI coding assistance.',
      architecture: [
        'Tree-sitter for multi-language parsing',
        'SQLite for symbol storage',
        'ONNX / local embedding models (Ollama, vLLM)',
        'Local LLMs via Ollama, vLLM, llama.cpp',
      ],
      currentStatus: 'Currently testing on Kubernetes codebase with Qwen-3 model. Working through tool call issues with local models. Updates coming soon.',
    },
  },
];

export default function OpenSource() {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);
  const [hoveredExtension, setHoveredExtension] = useState<number | null>(null);

  return (
    <section id="opensource" className="py-24 md:py-32 px-6 md:px-8 border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-[#707070] tracking-wider mb-2">
            OPEN SOURCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#EDEDED]">
            Contributions
          </h2>
        </motion.div>

        {/* NPM Packages Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FaNpm className="w-6 h-6 text-[#CB3837]" />
            <h3 className="text-xl font-semibold text-[#EDEDED]">NPM Packages</h3>
          </div>

          <div className="space-y-1">
            {npmPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group border-t border-[#1F1F1F] py-4 hover:bg-[#111111] transition-all cursor-pointer px-4 -mx-4"
                onMouseEnter={() => setHoveredPackage(index)}
                onMouseLeave={() => setHoveredPackage(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  {/* Name and Version */}
                  <div className="flex items-center gap-3 md:w-64">
                    <span className="font-mono text-sm text-[#707070]">{String(index + 1).padStart(2, '0')}</span>
                    <h4 className="font-semibold text-[#EDEDED] group-hover:translate-x-1 transition-transform">
                      {pkg.name}
                    </h4>
                    <span
                      className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                        hoveredPackage === index ? 'opacity-100' : ''
                      }`}
                    >
                      <svg className="w-4 h-4 text-[#707070]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="flex-1 text-sm text-[#A1A1A1]">{pkg.description}</p>

                  {/* Version */}
                  <span className="font-mono text-xs text-[#707070] md:w-20 text-right">{pkg.version}</span>
                </div>

                {/* Expanded Info */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredPackage === index ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="ml-8 space-y-4">
                    {/* Problem */}
                    <div>
                      <p className="font-mono text-xs text-[#707070] tracking-wider mb-1">PROBLEM</p>
                      <p className="text-sm text-[#A1A1A1]">{pkg.problem}</p>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <p className="font-mono text-xs text-[#707070] tracking-wider mb-1">USE CASES</p>
                      <ul className="space-y-1">
                        {pkg.useCases.map((useCase, i) => (
                          <li key={i} className="text-sm text-[#A1A1A1] flex items-start gap-2">
                            <span className="text-[#0070F3]">•</span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <p className="font-mono text-xs text-[#707070] tracking-wider mb-1">WHO IT&apos;S FOR</p>
                      <p className="text-sm text-[#A1A1A1]">{pkg.targetAudience}</p>
                    </div>

                    {/* Link */}
                    <a
                      href={pkg.npmLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#0070F3] hover:text-[#0060D0]"
                    >
                      View on npm <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* VS Code Extensions Section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <VscExtensions className="w-5 h-5 text-[#007ACC]" />
            <h3 className="text-xl font-semibold text-[#EDEDED]">VS Code Extensions</h3>
          </div>

          <div className="space-y-1">
            {vscodeExtensions.map((ext, index) => (
              <motion.div
                key={ext.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group border-t border-[#1F1F1F] py-4 hover:bg-[#111111] transition-all cursor-pointer px-4 -mx-4"
                onMouseEnter={() => setHoveredExtension(index)}
                onMouseLeave={() => setHoveredExtension(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  {/* Name */}
                  <div className="flex items-center gap-3 md:w-64">
                    <span className="font-mono text-sm text-[#707070]">{String(index + 1).padStart(2, '0')}</span>
                    <h4 className="font-semibold text-[#EDEDED] group-hover:translate-x-1 transition-transform">
                      {ext.name}
                    </h4>
                    <span
                      className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                        hoveredExtension === index ? 'opacity-100' : ''
                      }`}
                    >
                      <svg className="w-4 h-4 text-[#707070]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="flex-1 text-sm text-[#A1A1A1]">{ext.description}</p>

                  {/* Status Badge */}
                  <span
                    className={`badge ${
                      ext.status === 'Released' ? 'badge-success' : 'badge-default'
                    } md:w-24 justify-center`}
                  >
                    {ext.status}
                  </span>
                </div>

                {/* Expanded Info */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    hoveredExtension === index ? 'max-h-[900px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="ml-8 space-y-4">
                    {/* Problem */}
                    <div>
                      <p className="font-mono text-xs text-[#707070] tracking-wider mb-1">PROBLEM</p>
                      <p className="text-sm text-[#A1A1A1]">{ext.problem}</p>
                    </div>

                    {/* Features */}
                    <div>
                      <p className="font-mono text-xs text-[#707070] tracking-wider mb-1">FEATURES</p>
                      <ul className="space-y-1">
                        {ext.features.map((feature, i) => (
                          <li key={i} className="text-sm text-[#A1A1A1] flex items-start gap-2">
                            <span className="text-[#0070F3]">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <p className="font-mono text-xs text-[#707070] tracking-wider mb-1">USE CASES</p>
                      <ul className="space-y-1">
                        {ext.useCases.map((useCase, i) => (
                          <li key={i} className="text-sm text-[#A1A1A1] flex items-start gap-2">
                            <span className="text-[#0070F3]">•</span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience */}
                    <div>
                      <p className="font-mono text-xs text-[#707070] tracking-wider mb-1">WHO IT&apos;S FOR</p>
                      <p className="text-sm text-[#A1A1A1]">{ext.targetAudience}</p>
                    </div>

                    {/* Roadmap (for Ollama Copilot) */}
                    {ext.roadmap && (
                      <div className="p-4 bg-[#0A0A0A] border border-[#0070F3]/30 rounded-lg">
                        <p className="font-mono text-xs text-[#0070F3] tracking-wider mb-2">🚀 COMING SOON: {ext.roadmap.title}</p>
                        <p className="text-sm text-[#A1A1A1] mb-3">{ext.roadmap.description}</p>
                        <p className="font-mono text-xs text-[#707070] tracking-wider mb-1">ARCHITECTURE</p>
                        <ul className="space-y-1 mb-3">
                          {ext.roadmap.architecture.map((item, i) => (
                            <li key={i} className="text-sm text-[#A1A1A1] flex items-start gap-2">
                              <span className="text-[#0070F3]">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-[#707070] italic">{ext.roadmap.currentStatus}</p>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-4">
                      {ext.marketplaceLink && (
                        <a
                          href={ext.marketplaceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-[#0070F3] hover:text-[#0060D0]"
                        >
                          Marketplace <FaExternalLinkAlt className="w-3 h-3" />
                        </a>
                      )}
                      <a
                        href={ext.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-[#707070] hover:text-[#EDEDED]"
                      >
                        <FaGithub className="w-3 h-3" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}