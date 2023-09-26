# Dokumentasi Sistem Authentication

Dokumentasi ini menjelaskan cara menggunakan sistem Authentication sederhana berdasarkan username dan password tanpa mempertimbangkan peran (role-based). Sistem ini memungkinkan pengguna untuk mendaftar, masuk, mengakses rute terlindungi, dan memperbarui token akses.

## Daftar Isi

1. [Deskripsi Proyek](#deskripsi-proyek)
2. [Persyaratan](#persyaratan)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
   - [Registrasi Pengguna](#registrasi-pengguna)
   - [Masuk (Login)](#masuk-login)
   - [Mengakses Rute Terlindungi](#mengakses-rute-terlindungi)
   - [Merefresh Token Akses](#merefresh-token-akses)

## 1. Deskripsi Proyek <a name="deskripsi-proyek"></a>

Proyek ini adalah contoh implementasi sistem otentikasi sederhana menggunakan Node.js, Express.js, JSON Web Tokens (JWT), dan bcrypt untuk mengelola otentikasi pengguna. Sistem ini memungkinkan pengguna untuk mendaftar, masuk, mengakses rute terlindungi, dan memperbarui token akses.

## 2. Persyaratan <a name="persyaratan"></a>

Sebelum Anda memulai, pastikan Anda telah memenuhi persyaratan berikut:

- Node.js dan npm telah terinstal di komputer Anda.
- Text editor atau IDE yang Anda sukai telah terinstal (misalnya, Visual Studio Code).

## 3. Instalasi <a name="instalasi"></a>

Langkah-langkah untuk menginstal dan menjalankan proyek ini:

1. Clone repositori dari GitHub:

   ```bash
   git clone https://github.com/your/repository.git
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd project-directory
   ```

3. Instal semua dependensi:

   ```bash
   npm install
   ```

4. Jalankan aplikasi:

   ```bash
   npm start
   ```

   Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000).

## 4. Penggunaan <a name="penggunaan"></a>

### Registrasi Pengguna <a name="registrasi-pengguna"></a>

- **Endpoint**: `POST /api/register`
- **Deskripsi**: Mendaftarkan pengguna baru dengan informasi username dan password.
- **Contoh Permintaan**:

  ```json
  {
    "username": "ahmad_alif",
    "password": "password123"
  }
  ```

- **Contoh Tanggapan Sukses**:

  ```json
  {
    "message": "User registered successfully"
  }
  ```

### Masuk (Login) <a name="masuk-login"></a>

- **Endpoint**: `POST /api/login`
- **Deskripsi**: Memeriksa kredensial pengguna dan menghasilkan token akses jika kredensial valid.
- **Contoh Permintaan**:

  ```json
  {
    "username": "ahmad_alif",
    "password": "password123"
  }
  ```

- **Contoh Tanggapan Sukses**:

  ```json
  {
    "accessToken": "your-access-token"
  }
  ```

### Mengakses Rute Terlindungi <a name="mengakses-rute-terlindungi"></a>

- **Deskripsi**: Anda dapat mengakses rute terlindungi dengan menggunakan token akses yang valid.
- **Contoh Permintaan**:

  ```bash
  curl -X GET -H "Authorization: Bearer YOUR_ACCESS_TOKEN" http://localhost:3000/api/protectedAuth
  ```

- **Contoh Tanggapan Sukses**:

  ```json
  {
    "message": "Berhasil Akses",
    "data": "req.body "
  }
  ```

### Merefresh Token Akses <a name="merefresh-token-akses"></a>

- **Endpoint**: `POST /api/refresh`
- **Deskripsi**: Menggunakan token akses yang valid untuk menghasilkan token akses baru.
- **Contoh Permintaan**:

  ```json
  {
    "accessToken": "your-access-token"
  }
  ```

- **Contoh Tanggapan Sukses**:

  ```json
  {
    "accessToken": "your-new-access-token"
  }
  ```
