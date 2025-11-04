import http from 'k6/http';
import { sleep, check } from 'k6';

// konfigurasi load test
export const options = {
  vus: 10, // jumlah virtual user
  duration: '10s', // waktu test 10 detik
};

export default function () {
  const res = http.get('https://test.k6.io');

  // validasi response
  check(res, {
    'status code 200': (r) => r.status === 200,
  });

  // jeda kecil tiap user
  sleep(1);
}
