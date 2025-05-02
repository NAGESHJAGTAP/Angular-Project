
```markdown
# 👥 Angular User Management App

This is a simple **Angular project** that displays a list of users and allows you to **add a new user** using a form. It fetches existing users from an external API and lets you add new ones to your local backend using a POST request.

---

## 🚀 Features

- 🔄 Fetches user list from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
- ➕ Allows adding a new user via a form
- 📤 Submits new user data to a local API (`http://localhost:3000/api/pharmacies`)
- 🧾 Responsive UI with a clean and modern design
- 🎯 Fully written in **Standalone Angular Components**
- 🎨 CSS for stylish UI including form and table
- 🌐 Basic server-side configuration for SSR-ready structure

---

## 🛠️ Tech Stack

- [Angular 17+](https://angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)
- [Standalone Components](https://angular.io/guide/standalone-components)
- [HttpClient](https://angular.io/guide/http)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 📂 Project Structure

```

src/
├── app.component.html      # UI Template
├── app.component.css       # Component Styling
├── app.component.ts        # Component Logic with HTTP & Form
├── app.server.ts           # Server-side rendering configuration
└── assets/                 # Static assets

````

---

## 📦 Prerequisites

- Node.js (v16+)
- Angular CLI (`npm install -g @angular/cli`)
- Local backend server (Example: Node.js + Express API at `/api/pharmacies`)

---

## 🧪 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/angular-user-management.git
cd angular-user-management
````

2. **Install dependencies**

```bash
npm install
```

3. **Run the Angular project**

```bash
ng serve
```

4. **Make sure your local backend API is running**

Example for Express:

```bash
# Starts backend on http://localhost:3000
npm run start:server
```

5. **Visit in Browser**

```
http://localhost:4200
```

---

## 📝 Notes

* The form sends user data to `http://localhost:3000/api/pharmacies`. Make sure your local API supports this route.
* Users from the placeholder API do not persist after refresh. Locally added users are only stored temporarily.
* You can customize styling in `app.component.css`.

---

## 🤝 Contributing

Feel free to fork and improve this project! Pull requests are welcome.

---

## 🧑‍💻 Author

**Nagesh Jagtap**
🔗 [GitHub](https://github.com/NAGESHJAGTAP)
🔗 [LinkedIn](https://www.linkedin.com/in/nagesh-jagtap-9bb56031a/)

---


