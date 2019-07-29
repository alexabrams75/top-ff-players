// import rp from 'request-promise';
import cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs';

const url = 'http://www.nfl.com/player/tombrady/2504211/profile';

axios.get(url).then(
  response => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      console.log(html);
    }
  },
  error => console.log(error)
);
