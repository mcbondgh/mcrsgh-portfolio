
# Deploying to cPanel

This guide will help you deploy your React application to a cPanel hosting environment.

## Step 1: Build the project

First, build your project locally to generate the production files:

```bash
npm run build
```

This will create a `dist` folder containing all the optimized files ready for production.

## Step 2: Upload files to cPanel

1. Log in to your cPanel account
2. Navigate to the File Manager
3. Go to the `public_html` directory (or a subdirectory if you want to host in a specific folder)
4. Upload all the contents of the `dist` folder to this directory
5. Upload the `.htaccess` file to the same directory

## Step 3: Set permissions (if needed)

1. Select all files and folders
2. Click on "Permissions" or right-click and select "Change Permissions"
3. Set files to 644 and directories to 755

## Step 4: Test your website

Visit your website URL to make sure everything works as expected. Test navigation to ensure all routes work correctly.

## Troubleshooting

If routes don't work correctly:
1. Ensure the `.htaccess` file was uploaded properly
2. Check if your server has mod_rewrite enabled (contact your hosting provider if unsure)

If your site loads but assets are missing:
1. Check browser console for 404 errors
2. Ensure all paths in the build are relative (update vite.config.ts if needed)
