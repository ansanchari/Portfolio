```markdown
# Sanchari Mukherjee | Portfolio

A modern, highly interactive personal portfolio built to showcase full-stack AI applications, agentic workflows, and software engineering projects. Engineered with a focus on seamless user experience, complex route animations, and performant web design.

**Website Link:** 

##  Features

* **Advanced Page Transitions:** Custom DOM unmount handling and layout animations using Framer Motion (featuring synchronized blackout curtains and strict layout locking to prevent UI stretching).
* **Interactive UI:** Smooth, swipeable project and certification carousels powered by Swiper.js, perfectly integrated into Next.js rendering cycles.
* **Serverless Contact Form:** Fully integrated, secure contact form utilizing Formspree with strict JSON headers.
* **Optimized Assets:** Next.js Image component optimization for lightning-fast load times.
* **Responsive Design:** Mobile-first architecture built strictly with Tailwind CSS on a modern dark canvas.

##  Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (React)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Carousels:** [Swiper.js](https://swiperjs.com/)
* **Form Handling:** [Formspree](https://formspree.io/)
* **Deployment:** [Vercel](https://vercel.com/)

##  Local Development

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name

```

2. **Install dependencies:**
```bash
npm install

```


3. **Set up Environment Variables:**
Create a `.env.local` file in the root directory. You will need a Formspree account to handle the contact form submissions.
```env
NEXT_PUBLIC_FORMSPREE=your_formspree_endpoint_id

```


4. **Run the development server:**
```bash
npm run dev

```


Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

##  Deployment

This project is optimized for deployment on **Vercel**.

1. Push your code to a GitHub repository.
2. Import the repository into your Vercel dashboard.
3. Add the `NEXT_PUBLIC_FORMSPREE` environment variable in the Vercel project settings prior to deployment.
4. Deploy!

##  License

This project is built upon an open-source MIT-licensed template and heavily modified.
Copyright (c) 2026 Sanchari Mukherjee. See the [LICENSE] file for details.
