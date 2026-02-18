# PortfolioSite

A personal portfolio website for Wehan Smit, showcasing projects, work experience, and technical skills. This project is built using a combination of F# (ASP.NET Core) for the backend and modern web technologies for the frontend.

## 🚀 Overview

This repository contains the source code for Wehan Smit's professional portfolio. It highlights achievements in Game Development and Web Design, featuring projects like "Serial Cleaner" and "Rogue-le".

## 🛠️ Tech Stack

- **Backend:** [F#](https://fsharp.org/) with [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet) (SDK: Microsoft.NET.Sdk.Web)
- **Framework:** .NET 9.0
- **Frontend:** HTML5, CSS3, JavaScript
- **Libraries:** [Lenis](https://github.com/darkroomengineering/lenis) (for smooth scrolling)
- **Package Manager:** NuGet (integrated with .NET)

## 📋 Requirements

- [.NET 9.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0) or later.
- An IDE such as [JetBrains Rider](https://www.jetbrains.com/rider/) or Visual Studio with F# support.

## ⚙️ Setup & Run

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd PortfolioSite
   ```

2. **Restore dependencies:**
   ```bash
   dotnet restore
   ```

3. **Build the project:**
   ```bash
   dotnet build
   ```

4. **Run the application:**
   ```bash
   dotnet run --project PortfolioSite
   ```

5. **Access the site:**
   By default, the application will be available at `http://localhost:5000` or `https://localhost:5001` (check console output for exact URLs).

## 📂 Project Structure

```text
PortfolioSite/
├── PortfolioSite/          # Main project directory
│   ├── Properties/         # Launch settings and configurations
│   ├── lenis.min.js        # Smooth scroll library
│   ├── Program.fs          # Main entry point (F#)
│   ├── script.js           # Frontend logic
│   ├── style.css           # Styling
│   ├── PortfolioSite.fsproj # F# project configuration
│   └── appsettings.json    # Application settings
├── index.html              # Main HTML entry point
└── PortfolioSite.sln       # Solution file
```

## 📜 Scripts & Entry Points

- **Entry Point:** `PortfolioSite/Program.fs` (contains the `main` function and ASP.NET Core builder).
- **Startup Script:** Use `dotnet run` to start the web server.

## 🔑 Environment Variables

- **TODO:** Identify and document any specific environment variables used for production or staging. Currently uses standard ASP.NET Core defaults (`ASPNETCORE_ENVIRONMENT`).

## 🧪 Tests

- **TODO:** Add unit and integration tests. Currently, no test projects are present in the repository.

## 📄 License

- **TODO:** Add a LICENSE file to the repository.
