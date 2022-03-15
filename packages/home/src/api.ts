const API_SERVER = `https://api.rss2json.com/v1/api.json?rss_url=https://feeds.soundcloud.com/users/soundcloud:users:1050245170/sounds.rss&api_key=akyjk3nzwjof9x37wprd3lw4coxbwrxhkpwnx0qr`;

export const getPodcast = () =>
  fetch(`${API_SERVER}`).then((res) => res.json());
