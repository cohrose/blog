<script setup>
import { marked } from 'marked';
const code = `# Custom Email Domain

## Set Up Custom Domain
1. Purchase a custom domain name; I used [Namecheap](https://www.namecheap.com/).
2. Purchase an [email account](https://www.namecheap.com/hosting/email/) under the domain provider.
3. Create a mailbox for your custom domain.
   * Choose a mailbox name, example: \`john@yourdomain.com\`
   * Create a password for your new mailbox. You will need this later on.
4. Go to the DNS settings for your domain, and make sure “Private Email” is selected for your Mail Settings.

## Add Email to Email client
1. Choose email client, I chose [Spark](https://sparkmailapp.com/).
2. Type in the email address, and password you created from earlier.
3. Choose “Additional Settings”
4. Here you will configure the custom domain settings:

### Inbox server (IMAP)
* **Username**: your full email address (ex. [john@yourdomain.com](mailto:john@yourdomain.com))
* **Password**: password for this mail account
* **Server**: mail.privateemail.com
* **Port**: 993
* **Protection**: SSL
### Outbox server (SMTP)
* **Username**: your full email address (ex. [john@yourdomain.com](mailto:john@yourdomain.com))
* **Password**: password for this mail account
* **Server**: mail.privateemail.com
* **Port**: 465
* **Protection**: SSL

If everything was configured correctly, you should now be logged in to your custom email domain.

Keep in mind, you can still view your email mailbox from your domain provider.
`;

const mark = marked(code);
</script>

<template>
  <div v-html="mark" class="markdown"></div>
</template>

<style scoped></style>
