import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

export async function GET() {
  try {
    // Initialize Octokit with the token from environment variables
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    // Fetch user data
    const { data: userData } = await octokit.rest.users.getAuthenticated();
    const username = userData.login;

    // Fetch user repositories
    const { data: repos } = await octokit.rest.repos.listForAuthenticatedUser({
      visibility: 'public',
      sort: 'updated',
      per_page: 10
    });

    // Fetch pull requests created by the user
    const { data: pullRequestsData } = await octokit.rest.search.issuesAndPullRequests({
      q: `author:${username} type:pr`,
      sort: 'updated',
      order: 'desc',
      per_page: 10
    });

    // Fetch open pull requests count
    const { data: openPullRequestsData } = await octokit.rest.search.issuesAndPullRequests({
      q: `author:${username} type:pr state:open`,
      per_page: 1
    });

    // Return the data
    return NextResponse.json({
      user: {
        login: userData.login,
        avatar_url: userData.avatar_url,
        html_url: userData.html_url,
        name: userData.name || userData.login,
        bio: userData.bio || ''
      },
      repositories: repos,
      pullRequests: pullRequestsData.items || [],
      openPullRequests: openPullRequestsData.total_count || 0,
      totalPullRequests: pullRequestsData.total_count || 0
    });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    );
  }
}