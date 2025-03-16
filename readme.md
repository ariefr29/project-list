# Dokumentasi Singkat 

## Struktur Folder

```bash
portfolio/
├── assets/
│   ├── data.json
│   ├── contact.json
│   └── icon/
│       ├── apple-touch-icon.png
│       ├── favicon-32x32.png
│       └── ... (file favicon lainnya)
├── index.html
└── vue3.min.js (file Vue.js lokal)
```


## Data Dinamis

1. update data kontak
  - struktur data file `contact.json`
    ```json
    {
      "email": "email_anda@domain.com",
      "whatsapp_number": "628123456789" (format tanpa tanda + atau spasi)
    }
    ```  

2. update list project
  - struktur data file `data.json`
    ```json
    {
      "id": 1,
      "title": "Nama Projek",
      "category": "Web App|Mobile|Design",
      "year": "Tahun",
      "image": "URL gambar",
      "link": "URL demo",
      "github": "URL kode sumber",
      "tech": ["Teknologi 1", "Teknologi 2"],
      "description": "Deskripsi lengkap",
      "features": ["Fitur 1", "Fitur 2"]
    }
    ```  

  Untuk gambar, bisa gunakan:

  - URL eksternal (imgbb, imgur, cloud storage, dll)

  - Path lokal (e.g., /assets/projects/project1.jpg)


## Category

cari bagian berikut pada code vue dan edit
```js
data() {
  return {
    isDark: false,
    projects: [],
    contact: [],
    categories: ['All', 'Website', 'Web App', 'Design'],
    activeCategory: 'All',
    selectedProject: null
  }
}
```
ubah di bagian `categories` seperti `Website', 'Web App', 'Design` 


masih di bagian code vue
```js
categoryClasses(category) {
  return {
    'bg-blue-100 text-blue-800': category === 'Website',
    'bg-purple-100 text-purple-800': category === 'Web App',
    'bg-pink-100 text-pink-800': category === 'Design'
  }
}
```