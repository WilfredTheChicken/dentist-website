# Google Reviews setup

1. In Google Cloud, enable **Places API (New)** and attach billing to the project.
2. Create a server-restricted API key that can call Places API (New).
3. In the Sites deployment settings, create the secret `GOOGLE_PLACES_API_KEY` with that key.
4. Redeploy the site. The homepage will use Google Text Search to resolve the supplied Ideal Smiles profile, then Place Details to display its current rating, review count, and review excerpts.

The key remains server-side and is never sent to the browser. Google Places billing and content-display terms apply.
