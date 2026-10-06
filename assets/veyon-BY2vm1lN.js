var e=`## Veyon Free and Open Source (FOSS) Application\r
\r
Veyon is a free and open-source application used for the remote monitoring and control of computers in educational environments such as schools, colleges, and computer labs.\r
\r
## To Download the Software\r
\r
\`\`\`text\r
[https://veyon.io/download/](https://veyon.io/download/)\r
\`\`\`\r
\r
<a href="https://veyon.io/download/" target="_blank">Download Veyon</a>\r
\r
<img src="/assets/To_Download.png" alt="To Download" style="max-width:100%;"/>\r
\r
## Choose Your OS and Correct Architecture\r
\r
Scroll down and select your operating system and the correct architecture.\r
\r
For most modern Windows computers, select the Windows 64-bit version.\r
\r
<img src="/assets/Choose_Os_with_arc.png" alt="Choose OS and Architecture" style="max-width:100%;"/>\r
\r
> Before installation: Understand the basic concept of Veyon. The Master is the computer used by the teacher or administrator, while the Client computers are the systems that will be monitored and controlled.\r
\r
## Install Veyon on the Master System\r
\r
Install Veyon on the computer that you will use as the Master.\r
\r
After installation, open:\r
\r
\`\`\`text\r
Veyon Configurator\r
\`\`\`\r
\r
## Configure General Settings\r
\r
In Veyon Configurator, open the General section and configure the required settings.\r
\r
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; align-items:start; margin:1.25rem 0;">\r
<img src="/assets/Config_general1.png" alt="Veyon General Settings" style="width:100%; height:auto; margin:0; border:none;"/>\r
\r
<img src="/assets/Config_general2.png" alt="Veyon General Settings" style="width:100%; height:auto; margin:0; border:none;"/>\r
</div>\r
\r
## Configure Veyon Service\r
\r
Next, open the Service section and configure the Veyon Service.\r
\r
<img src="/assets/Config_service.png" alt="Veyon Service Configuration" style="max-width:100%;"/>\r
\r
Make sure the Veyon Service is enabled and running on the Master system.\r
\r
## Configure Authentication\r
\r
Open the Authentication section.\r
\r
For this setup, use Key File Authentication.\r
\r
<img src="/assets/Config_Auth_key1.png" alt="Veyon Authentication Configuration" style="max-width:100%;"/>\r
\r
## Create an Authentication Key Pair\r
\r
Create a new authentication key pair.\r
\r
The key pair contains:\r
\r
\`\`\`text\r
Private Key\r
Public Key\r
\`\`\`\r
\r
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; align-items:start; margin:1.25rem 0;">\r
<img src="/assets/Config_Auth_key2.png" alt="Create Authentication Key" style="width:100%; height:auto;"/>\r
\r
<img src="/assets/Config_Auth_key3.png" alt="Authentication Key Settings" style="width:100%; height:auto;"/>\r
</div>\r
\r
## Export the Authentication Keys\r
\r
Export the authentication keys after creating the key pair.\r
\r
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; align-items:start; margin:1.25rem 0;">\r
<img src="/assets/Config_Auth_key4.png" alt="Export Authentication Key" style="width:100%; height:auto;"/>\r
\r
<img src="/assets/Config_Auth_key5.png" alt="Authentication Key Export" style="width:100%; height:auto;"/>\r
</div>\r
\r
Keep the private key secure and accessible only to the administrator.\r
\r
The public key can be copied to a USB drive or a shared folder so that it can be used later during the Client configuration.\r
\r
> Important: Never share the private key with unauthorized users.\r
\r
## Configure Locations and Computers\r
\r
After configuring authentication, open:\r
\r
\`\`\`text\r
Veyon Configurator\r
        ↓\r
Locations & Computers\r
\`\`\`\r
\r
This section is used to create the computer lab location and add the computers that you want to manage.\r
\r
<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; align-items:start; margin:1.25rem 0;">\r
<img src="/assets/Config_loc_&_comp1.png" alt="Veyon Locations and Computers" style="width:100%; height:auto;"/>\r
\r
<img src="/assets/Config_loc_&_comp2.png" alt="Veyon Computer Configuration" style="width:100%; height:auto;"/>\r
</div>\r
\r
For example, create a location:\r
\r
\`\`\`text\r
Computer Lab 1\r
\`\`\`\r
\r
Then add the computers inside that location.\r
\r
For each computer, you will need:\r
\r
\`\`\`text\r
Name\r
Host Address / IP Address\r
MAC Address\r
\`\`\`\r
\r
You can get these details from the respective Client computer.\r
\r
### Computer Name\r
\r
On the Client computer, open Command Prompt and run:\r
\r
\`\`\`cmd\r
hostname\r
\`\`\`\r
\r
Example:\r
\r
\`\`\`text\r
LAB-PC-01\r
\`\`\`\r
\r
### IP Address\r
\r
Run:\r
\r
\`\`\`cmd\r
ipconfig\r
\`\`\`\r
\r
Find the:\r
\r
\`\`\`text\r
IPv4 Address\r
\`\`\`\r
\r
Example:\r
\r
\`\`\`text\r
192.168.1.101\r
\`\`\`\r
\r
### MAC Address\r
\r
Run:\r
\r
\`\`\`cmd\r
ipconfig /all\r
\`\`\`\r
\r
Find:\r
\r
\`\`\`text\r
Physical Address\r
\`\`\`\r
\r
Example:\r
\r
\`\`\`text\r
AA-BB-CC-11-22-33\r
\`\`\`\r
\r
You can then add the computer to Veyon using:\r
\r
\`\`\`text\r
Name:\r
LAB-PC-01\r
\r
Host Address:\r
192.168.1.101\r
\r
MAC Address:\r
AA-BB-CC-11-22-33\r
\`\`\`\r
\r
Repeat this process for each computer in the laboratory.\r
\r
> Tip: If the computers receive changing IP addresses through DHCP, consider using DHCP reservations or reliable hostnames to make the Veyon configuration easier to maintain.\r
\r
---\r
\r
At this point, the Master configuration is complete.\r
\r
The next part will cover the Client configuration, including installing Veyon, configuring General and Service settings, and importing the Public Key.`;export{e as default};