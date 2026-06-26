# LuminaCards💳✨

Hey there! Welcome to **LuminaCards**. 

I built this project to solve a very specific, yet incredibly frustrating problem: **finding the right credit card in India is overwhelmingly complicated.** There are hundreds of cards, buried in fine print, hidden eligibility criteria, and confusing reward structures. 

LuminaCards is designed to cut through the noise. It acts as your personal financial concierge, taking a few simple details about your lifestyle and income, and instantly matching you with the perfect credit cards that actually reward your spending habits.

## 🚀 Why I Built This

I wanted to create an experience that feels less like filling out a boring bank form, and more like having a chat with a smart financial advisor. 

Beyond the UX, it’s built to be blazing fast, entirely type-safe, and capable of scaling without breaking a sweat.

## 🛠️ The Tech Stack (Under the Hood)

Here’s the machinery powering the experience:

*   **React 18 & Vite**: For lightning-fast rendering and an optimized modern build pipeline.
*   **100% TypeScript**: The entire codebase is strictly typed. No `any` shortcuts. This ensures compile-time safety and self-documenting code.
*   **Zustand for State**: Instead of falling into the trap of messy prop-drilling or dealing with Redux boilerplate, I used Zustand for atomic, frictionless global state management.
*   **Simulated Async Architecture**: The recommendation engine isn't just a synchronous function. It's wrapped in a simulated API layer to mimic real-world network latency and graceful loading states.
*   **Native CSS Grid & Glassmorphism**: No heavy component libraries here. The UI is built using raw, modern CSS with a focus on fluid responsiveness, deep dark modes, and premium glassmorphic aesthetics.
*   **Vitest**: The core recommendation pipeline is guarded by automated unit tests to guarantee algorithmic accuracy under edge cases.

## 🧠 The Recommendation Engine

The heart of the app isn't just the UI—it's the algorithm. The engine operates in a pure, 3-step pipeline:

1.  **The Hard Filter**: First, it aggressively filters out cards you aren't eligible for based on strict CIBIL score and monthly income thresholds. 
2.  **The Lifestyle Match**: It iterates through the remaining cards, granting points when the card's native reward categories align perfectly with the lifestyle choices you made in the wizard (e.g., Travel, Shopping, Fuel).
3.  **The Tie-Breaker**: Finally, it sorts the matching cards descending by your personalized match score, using the card's overall market rating as a tie-breaker. 

## 🏃‍♂️ Running it Locally

Want to take it for a spin? It’s incredibly easy to get started:

```bash
# Clone the repository
git clone https://github.com/razeen-007/LuminaCards.git
cd luminacards

# Install the dependencies
npm install

# Start the development server
npm run dev
```

If you want to run the automated test suite to see the engine verified in real-time, just run:
```bash
npx vitest run
```