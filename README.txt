================================================================
  CAMPUS MARKETPLACE – README
  COMP2000 / Web Application Development Group Assignment
================================================================

----------------------------------------------------------------
1. FIREBASE CONFIGURATION
----------------------------------------------------------------
Replace the placeholder values in firebase-config.js with your
own Firebase project credentials:

  apiKey:            "YOUR_API_KEY"
  authDomain:        "YOUR_AUTH_DOMAIN"
  projectId:         "YOUR_PROJECT_ID"
  storageBucket:     "YOUR_STORAGE_BUCKET"
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
  appId:             "YOUR_APP_ID"

You can find these values in the Firebase Console:
  Gear icon ⚙️ > Project Settings > Your Apps > SDK setup

----------------------------------------------------------------
2. TEST USER CREDENTIALS
----------------------------------------------------------------
Create these three accounts in Firebase Console:
  Authentication > Users > Add User

  Email: alice@mq.edu.au     Password: Test1234
  Email: bob@mq.edu.au       Password: Test1234
  Email: carol@mq.edu.au     Password: Test1234

----------------------------------------------------------------
3. HOW TO RUN
----------------------------------------------------------------
Open the project folder in VS Code and launch login.html with
the Live Server extension (right-click > Open with Live Server).

Do NOT open the HTML files directly in a browser — Firebase
Auth requires an HTTP server (Live Server provides this).

----------------------------------------------------------------
4. FIRESTORE DATA SETUP  ← IMPORTANT — READ CAREFULLY
----------------------------------------------------------------
You must manually add items to Firestore via the Firebase Console.
Firebase Console > Firestore Database > Start collection

  STEP A: Note each test user's UID
  ----------------------------------
  Firebase Console > Authentication > Users
  Copy the UID shown next to each email. You'll need these below.

  STEP B: Create the 'items' collection
  ---------------------------------------
  In Firestore, click "Start collection" and name it: items
  Add each document below. Use "Auto-ID" for the Document ID.

  ┌─────────────────────────────────────────────────────────────┐
  │  FIELD          TYPE     VALUE                              │
  └─────────────────────────────────────────────────────────────┘

  ── ALICE'S ITEMS (sellerId = Alice's UID) ──────────────────

  Document 1:
    name          string    Calculus Textbook (8th Edition)
    description   string    Stewart Calculus, lightly used. Great condition, no highlighting.
    price         number    45
    isForTrade    boolean   false
    category      string    Textbooks
    imageUrl      string    https://picsum.photos/seed/calculus/400/300
    sellerEmail   string    alice@mq.edu.au
    sellerId      string    [PASTE ALICE'S UID HERE]

  Document 2:
    name          string    IKEA Desk Lamp
    description   string    White adjustable desk lamp, barely used. Includes original box.
    price         number    15
    isForTrade    boolean   false
    category      string    Furniture
    imageUrl      string    https://picsum.photos/seed/desklamp/400/300
    sellerEmail   string    alice@mq.edu.au
    sellerId      string    [PASTE ALICE'S UID HERE]

  Document 3:
    name          string    Winter Jacket (Size M)
    description   string    Warm navy blue puffer jacket. Only worn one season.
    price         number    0
    isForTrade    boolean   true
    category      string    Clothing
    imageUrl      string    https://picsum.photos/seed/jacket/400/300
    sellerEmail   string    alice@mq.edu.au
    sellerId      string    [PASTE ALICE'S UID HERE]

  ── BOB'S ITEMS (sellerId = Bob's UID) ──────────────────────

  Document 4:
    name          string    MacBook Air M1 (2020)
    description   string    8GB RAM, 256GB SSD. Minor scuff on lid, works perfectly.
    price         number    950
    isForTrade    boolean   false
    category      string    Electronics
    imageUrl      string    https://picsum.photos/seed/macbookair/400/300
    sellerEmail   string    bob@mq.edu.au
    sellerId      string    [PASTE BOB'S UID HERE]

  Document 5:
    name          string    Psychology 101 Textbook
    description   string    Myers Psychology 12th Edition. A few sticky notes inside.
    price         number    30
    isForTrade    boolean   false
    category      string    Textbooks
    imageUrl      string    https://picsum.photos/seed/psychbook/400/300
    sellerEmail   string    bob@mq.edu.au
    sellerId      string    [PASTE BOB'S UID HERE]

  Document 6:
    name          string    Study Desk
    description   string    Solid timber desk 120cm wide. Must collect from Ryde. No chair.
    price         number    80
    isForTrade    boolean   false
    category      string    Furniture
    imageUrl      string    https://picsum.photos/seed/studydesk/400/300
    sellerEmail   string    bob@mq.edu.au
    sellerId      string    [PASTE BOB'S UID HERE]

  ── CAROL'S ITEMS (sellerId = Carol's UID) ──────────────────

  Document 7:
    name          string    Sony WH-1000XM4 Headphones
    description   string    Noise-cancelling, barely used. Comes with carry case and cables.
    price         number    180
    isForTrade    boolean   false
    category      string    Electronics
    imageUrl      string    https://picsum.photos/seed/headphones/400/300
    sellerEmail   string    carol@mq.edu.au
    sellerId      string    [PASTE CAROL'S UID HERE]

  Document 8:
    name          string    Biology: The Core (3rd Ed)
    description   string    Campbell Biology: The Core. Happy to trade for a Chemistry text.
    price         number    0
    isForTrade    boolean   true
    category      string    Textbooks
    imageUrl      string    https://picsum.photos/seed/biobook/400/300
    sellerEmail   string    carol@mq.edu.au
    sellerId      string    [PASTE CAROL'S UID HERE]

  Document 9:
    name          string    Nike Tech Fleece Hoodie (Size L)
    description   string    Black Nike hoodie. Worn a few times, washed and clean.
    price         number    55
    isForTrade    boolean   false
    category      string    Clothing
    imageUrl      string    https://picsum.photos/seed/nikehoodie/400/300
    sellerEmail   string    carol@mq.edu.au
    sellerId      string    [PASTE CAROL'S UID HERE]

  Summary: 9 items, 4 categories (Textbooks, Furniture, Clothing,
  Electronics), across 3 test users. ✓

----------------------------------------------------------------
5. FIRESTORE SECURITY RULES
----------------------------------------------------------------
In Firestore > Rules, replace the default rules with:

  rules_version = '2';
  service cloud.firestore {
    match /databases/{database}/documents {
      match /{document=**} {
        allow read, write: if request.auth != null;
      }
    }
  }

Then click Publish. This ensures only signed-in users can
read or write any data.

----------------------------------------------------------------
6. FILE STRUCTURE
----------------------------------------------------------------
  campus-marketplace/
  ├── firebase-config.js   Shared Firebase init (edit this first)
  ├── login.html           Page 1: Sign-in page
  ├── index.html           Page 2: Welcome page
  ├── marketplace.html     Page 3: Browse other users' items
  ├── mylistings.html      Page 4: Current user's own listings
  ├── shortlist.html       Page 5: Saved/shortlisted items
  └── README.txt           This file

----------------------------------------------------------------
7. FIRESTORE COLLECTIONS USED
----------------------------------------------------------------
  items/                        All marketplace listings
    {itemId}
      name          string
      description   string
      price         number  (0 if isForTrade is true)
      isForTrade    boolean
      category      string
      imageUrl      string
      sellerEmail   string
      sellerId      string  (Firebase Auth UID of the seller)

  shortlists/
    {userId}/                   One document per user (UID)
      items/
        {itemId}                Document ID = the item's Firestore ID
          itemId      string
          itemName    string
          addedAt     timestamp

----------------------------------------------------------------
8. PRESENTATION CHECKLIST
----------------------------------------------------------------
During the demo, make sure to show:
  □ Sign in as alice@mq.edu.au
  □ Marketplace: Alice does NOT see her own 3 items
  □ Shortlist an item — button turns green and says "✓ Shortlisted"
  □ Navigate to My Shortlist — shortlisted item appears
  □ Remove item from shortlist — row disappears immediately
  □ My Listings — only Alice's 3 items appear
  □ Sign out → redirected to login.html
  □ Sign in as bob@mq.edu.au
  □ Marketplace shows different available items (not Bob's 3)
  □ My Shortlist is empty (separate per-user shortlist)
  □ My Listings shows only Bob's 3 items

================================================================
