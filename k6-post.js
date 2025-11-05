import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 100, // Jumlah virtual users
  duration: '10s', // Durasi 10 detik
};

export default function () {
  const payload = JSON.stringify({
    username: 'user@example.com',
    password: 'password123',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // Melakukan POST request untuk login
  const res = http.post('https://example.com/api/login', payload, params);

  // Memeriksa apakah login berhasil dengan status code 200
  check(res, {
    'status code is 200': (r) => r.status === 200,
  });

  sleep(1); // Jeda antara permintaan
}
