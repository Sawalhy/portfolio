/** The Writing section and the article pages read from this one list.
    `card*` fields render the teaser on the portfolio; the rest renders the page.
    To add a piece: append an entry and add a matching HTML entry point
    (see writing/<slug>/index.html and vite.config.ts). */

import type { ReactNode } from 'react'

export type Article = {
  slug: string
  category: string
  /** Plain text for <title>, meta description and aria labels. */
  metaTitle: string
  metaDescription: string
  /** Teaser as it appears on the portfolio card. */
  cardTitle: ReactNode
  cardSummary: ReactNode
  /** Page headline. <em> is restyled as the accent-coloured phrase, not italics. */
  title: ReactNode
  dek: string
  linkedin: string
  tone: 'accent' | 'accent-2'
  body: ReactNode
}

export const articleHref = (slug: string) => `${import.meta.env.BASE_URL}writing/${slug}/`

export const articles: readonly Article[] = [
  {
    slug: 'javascript-doesnt-have-classes',
    category: 'JavaScript',
    metaTitle: "JavaScript Doesn't Have Classes!",
    metaDescription:
      "JavaScript has class syntax, but no class in the Java or C++ sense is ever declared — they're constructor functions in disguise.",
    cardTitle: 'JavaScript Doesn’t Have Classes!',
    cardSummary:
      'Anyone who started with JavaScript after 2015 will find that statement confusing. There is a class syntax, but under the hood no class in the Java or C++ sense is ever declared.',
    title: (
      <>
        JavaScript Doesn't Have <em>Classes!</em>
      </>
    ),
    dek: "// they're just constructor functions in disguise",
    linkedin:
      'https://www.linkedin.com/posts/sawalhyahmed_javascript-webdevelopment-programming-activity-7441907965005164544-0ct9',
    tone: 'accent',
    body: (
      <>
        <p className="article__lede">
          Yes, that's correct. Anyone who started using JavaScript after 2015 will be very confused by this statement.
        </p>
        <blockquote>"But I saw the class syntax in the intro course I took when I started programming!"</blockquote>
        <p>Which would also be accurate.</p>
        <p>
          JavaScript has a syntax for classes, but under the hood, no class in the Java/C++ sense is being declared.
          Don't believe me? Go run this in your browser console:
        </p>
        <pre>
          <code>{`class Test {
  constructor() {
    this.prop = "test";
  }
}

console.log(typeof Test);`}</code>
        </pre>
        <p>
          Yes, it's a function. JavaScript classes essentially do two things: create a constructor function that works
          with the <code>new</code> keyword, and set up a prototype object (more on that another time).
        </p>
        <blockquote>"Okay, but it's still basically a class."</blockquote>
        <p>No, not really. Try this code (hopefully you tried the one above first):</p>
        <pre>
          <code>let x = new Test();</code>
        </pre>
        <p>
          Now you have a <code>Test</code> object with one property, <code>prop</code>. Now do this:
        </p>
        <pre>
          <code>x.newprop = "newprop";</code>
        </pre>
        <p>
          This runs. In most other languages, this would be grounds for the compiler to crash your IDE out of pure
          spite. It runs in JavaScript because the class was never acting as a blueprint, it was just a special
          constructor function all along.
        </p>
        <p>
          If you've always been confused by the <code>__proto__</code> property when checking JavaScript objects and
          were too scared to ask what it is: well, it's part of the same conspiracy. I'll be writing about it in my next
          post.
        </p>
      </>
    ),
  },
  {
    slug: 'prototype-chain',
    category: 'JavaScript',
    metaTitle: 'That [[Prototype]] thing Claude added broke production!',
    metaDescription:
      'There is no class inheritance in JavaScript either — but the prototype chain underneath is more interesting than what’s missing.',
    cardTitle: (
      <>
        That <span className="mono">[[Prototype]]</span> thing Claude added broke production!
      </>
    ),
    cardSummary: (
      <>
        There is no class inheritance either, but the prototype chain underneath is more interesting than what’s
        missing. Plus the three lines of ceremony that <span className="mono">extends</span> hides from you.
      </>
    ),
    title: (
      <>
        That <em>[[Prototype]]</em> thing Claude added broke production!
      </>
    ),
    dek: '// expand the object, follow the <prototype> rows up',
    linkedin:
      'https://www.linkedin.com/posts/sawalhyahmed_javascript-webdevelopment-programming-activity-7458862503981203456-aS6l',
    tone: 'accent-2',
    body: (
      <>
        <p className="article__lede">
          Last post established there are no classes in JavaScript. So it won't shock you that there's no class
          inheritance either, but what's actually there is more interesting than what's missing.
        </p>
        <p>
          Why do we even need inheritance? It's for reusing code. But instead of linking to classes (which don't exist
          in JavaScript), instances of a "class" link to the "class" prototype.
        </p>
        <p>
          So let's take an object <code>scooby</code> from class <code>Dog</code>. When it tries to call{' '}
          <code>scooby.bark()</code>, the interpreter doesn't go to a set-in-stone class definition like most languages,
          it goes to scooby's prototype object and looks for that method. If the person writing the code is not a
          villain, it will be the prototype owned by the class <code>Dog</code>, i.e. <code>Dog.prototype</code>.
        </p>
        <p>
          If you inspect the prototype object, you'll realise it also has its own prototype object. In the case of{' '}
          <code>Dog.prototype</code>, its prototype is <code>Animal.prototype</code>, which is where the interpreter
          looks next if it can't find a method definition on Dog's prototype. It's a "prototype chain".
        </p>

        <div className="chain">
          <div className="chain__node">
            <div className="chain__name">scooby</div>
            <div className="chain__note">instance · no methods of its own</div>
          </div>
          <div className="chain__step">.bark()? not here, walk up ↑</div>
          <div className="chain__node chain__node--found">
            <div>
              <div className="chain__name">Dog.prototype</div>
              <div className="chain__note">bark() lives here</div>
            </div>
            <span className="tag chain__tag">found</span>
          </div>
          <div className="chain__step">if not, keep walking ↑</div>
          <div className="chain__node chain__node--sage">
            <div className="chain__name">Animal.prototype</div>
            <div className="chain__note">eat() lives here</div>
          </div>
          <div className="chain__step">↑</div>
          <div className="chain__node chain__node--base">
            <div className="chain__name">Object.prototype</div>
            <div className="chain__note">toString, hasOwnProperty…</div>
          </div>
          <div className="chain__terminal">null</div>
          <div className="chain__caption">// inheritance isn't copying, it's delegation to a live object</div>
        </div>

        <blockquote>Okay, you can stop reading now… unless you also want to see the actually interesting JS lore.</blockquote>

        <h2>
          What <code>extends</code> hides from you
        </h2>
        <p>
          Pre-ES6 (released in 2015) you had to wire inheritance manually. There wasn't a class syntax, so why would you
          expect inheritance syntax?
        </p>
        <p>
          Before I show you the actual code, let's recap the goal. To say that <code>Dog</code> inherits from{' '}
          <code>Animal</code>, we want instances of Dog to share the code we already defined for Animal. So we need to
          create Dog and have its prototype's prototype (tongue twister, I know) point to Animal's prototype. Sounds
          simple, right? Not when working with JavaScript 💀
        </p>

        <pre>
          <code>
            {`function Animal(name) {
  this.name = name
}
Animal.prototype.eat = function() { `}
            <span className="c">/* … */</span>
            {` }

function Dog(name, breed) {
  Animal.call(this, name)   `}
            <span className="c">// ③ borrow Animal's setup</span>
            {`
  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)  `}
            <span className="c">// ① link the chain</span>
            {`
Dog.prototype.constructor = Dog                  `}
            <span className="c">// ② restore the back-reference</span>
            {`
Dog.prototype.bark = function() { `}
            <span className="c">/* … */</span>
            {` }`}
          </code>
        </pre>

        <p>Three things stick out:</p>
        <ol>
          <li>
            <strong>
              Setting the prototype using <code>Object.create()</code>.
            </strong>{' '}
            Why aren't we just pointing Dog's prototype at Animal's with <code>Object.setPrototypeOf()</code>? Great
            question. I'll let the{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"
              target="_blank"
              rel="noopener"
            >
              MDN docs
            </a>{' '}
            answer it: click the link and read the threatening red overlay. When we use <code>Object.create</code> we're
            giving the class a <em>new</em> prototype rather than redirecting a pre-existing one, which preserves engine
            optimisations.
          </li>
          <li>
            <strong>
              <code>Dog.prototype.constructor = Dog</code>.
            </strong>{' '}
            Why set the constructor again? Because <code>Object.create()</code> made an empty object whose only link is
            Animal's prototype, so constructing a Dog would follow the chain and use Animal's constructor.
          </li>
          <li>
            <strong>
              Using <code>call()</code> for the Animal constructor.
            </strong>{' '}
            It makes sure the Animal constructor gets a <code>this</code>, because it's being invoked as a plain
            function call (which doesn't get one assigned, not in any useful way at least).
          </li>
        </ol>

        <p>
          Even if you made it this far and still don't quite understand what that <code>[[Prototype]]</code> object is:
          now you know it's a core feature of JavaScript, and not part of the mess you vibe-coded with Claude.
        </p>
      </>
    ),
  },
]

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug)
