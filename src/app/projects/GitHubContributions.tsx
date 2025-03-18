'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch } from 'react-icons/fa';
import { BiGitPullRequest, BiGitPullRequest as FaCodePullRequest } from 'react-icons/bi';
import { FaExclamationTriangle } from 'react-icons/fa';
import Image from 'next/image';

interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

interface PullRequest {
  id: number;
  html_url: string;
  title: string;
  state: string;
  created_at: string;
  repository_url: string;
}

interface GitHubData {
  user: {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
  };
  repositories: Repository[];
  pullRequests: PullRequest[];
  openPullRequests: number;
  totalPullRequests: number;
}

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  hover: { 
    scale: 1.03, 
    boxShadow: "0px 8px 30px rgba(59, 130, 246, 0.15)",
    transition: { duration: 0.3 }
  }
};

const GitHub = () => {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('/api/github');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        const data = await response.json();
        setGithubData(data);
      } catch (err) {
        setError('Error fetching GitHub data. Make sure you have set up your GitHub token.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse text-center">
          <FaGithub className="text-4xl mx-auto mb-4 text-gray-400" />
          <p className="text-gray-400">Loading GitHub data...</p>
        </div>
      </div>
    );
  }

  if (error || !githubData) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <FaExclamationTriangle className="text-4xl mx-auto mb-4 text-yellow-500" />
          <p className="text-gray-300 mb-2">
            {error || "Failed to load GitHub data"}
          </p>
          <p className="text-gray-400 text-sm">
            Make sure you have set up your GitHub token in the environment variables.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section 
      id="github" 
      className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
      aria-labelledby="github-heading"
    >
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 id="github-heading" className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            GitHub Contributions
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my open source contributions and recent activity on GitHub.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center mb-4">
              {githubData && githubData.user && githubData.user.avatar_url && (
                <Image
                  src={githubData.user.avatar_url}
                  alt={`${githubData.user.login}'s avatar`}
                  width={64}
                  height={64}
                  className="rounded-full mr-4 ring-2 ring-blue-500/50"
                />
              )}
              <div>
                <h3 className="text-xl font-bold">{githubData.user.name || githubData.user.login}</h3>
                {githubData.user.bio && <p className="text-gray-400">{githubData.user.bio}</p>}
                <a 
                  href={githubData.user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center mt-1"
                >
                  <FaGithub className="mr-1" /> @{githubData.user.login}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Pull Requests</h3>
              <BiGitPullRequest className="text-3xl text-blue-400" />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">{githubData.totalPullRequests}</p>
                <p className="text-gray-400">Total PRs</p>
              </div>
              <div>
                <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">{githubData.openPullRequests}</p>
                <p className="text-gray-400">Open PRs</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Repositories</h3>
              <FaCodeBranch className="text-3xl text-purple-400" />
            </div>
            <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">{githubData.repositories.length}</p>
            <p className="text-gray-400">Recent Repositories</p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaCodeBranch className="mr-2 text-purple-400" /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                Recent Repositories
              </span>
            </h3>
            <div className="space-y-4">
              {githubData.repositories && githubData.repositories.slice(0, 5).map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-900/80 p-5 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700/50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-blue-400">{repo.name}</h4>
                  <p className="text-gray-300 text-sm mb-3">{repo.description || 'No description available'}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    {repo.language && (
                      <span className="mr-4 flex items-center">
                        <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="mr-4 flex items-center">
                      <span className="mr-1">★</span> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <FaCodeBranch className="mr-1" /> {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaCodePullRequest className="mr-2 text-blue-400" /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Recent Pull Requests
              </span>
            </h3>
            <div className="space-y-4">
              {githubData.pullRequests && githubData.pullRequests.length > 0 ? (
                githubData.pullRequests.slice(0, 5).map((pr) => {
                  const repoUrl = pr.repository_url ? 
                    pr.repository_url.replace('https://api.github.com/repos/', '') : 
                    'Unknown Repository';
                  return (
                    <motion.a
                      key={pr.id}
                      href={pr.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-900/80 p-5 rounded-lg hover:bg-gray-800 transition-colors border border-gray-700/50"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="text-lg font-semibold text-blue-400">{pr.title}</h4>
                      <div className="flex flex-wrap items-center text-sm text-gray-400 mt-3">
                        <span className={`px-2 py-1 rounded-full text-xs mr-3 ${
                          pr.state === 'open' 
                            ? 'bg-green-900/50 text-green-300 border border-green-700/50' 
                            : 'bg-purple-900/50 text-purple-300 border border-purple-700/50'
                        }`}>
                          {pr.state}
                        </span>
                        <span className="mr-3">{repoUrl}</span>
                        <span className="text-gray-500">{new Date(pr.created_at).toLocaleDateString()}</span>
                      </div>
                    </motion.a>
                  );
                })
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <BiGitPullRequest className="text-4xl mx-auto mb-2 opacity-50" />
                  <p>No pull requests found</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <a
            href={githubData.user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-xl"
          >
            <FaGithub className="mr-2" /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;