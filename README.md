I challenged myself to make a social media with a single thread for posts in just 4 hours complete with authentication, a postgres database with full CRUD operations. A robust nextjs backend.

Key take-aways -- 
The deployment of my app was hindered a lot by prisma dropping native support for serverless functions
Security was a big concern and I eventually opted to using a external authentication provider,
I originally used a sqlite database for dev and a postgres for prod however for my recent projects I have opted for a docker postgres solution for hosting a local postgres database,
Gained experience using prisma orm,
Gained experience using postgres databases,
Gained experience in backend development using nextjs serverless backend,
