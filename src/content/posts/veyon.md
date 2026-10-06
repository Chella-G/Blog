## Veyon Free and Open Source (FOSS) Application

Veyon is a free and open-source application used for the remote monitoring and control of computers in educational environments such as schools, colleges, and computer labs.

## To Download the Software

```text
[https://veyon.io/download/](https://veyon.io/download/)
```

<a href="https://veyon.io/download/" target="_blank">Download Veyon</a>

<img src="/assets/To_Download.png" alt="To Download" style="max-width:100%;"/>

## Choose Your OS and Correct Architecture

Scroll down and select your operating system and the correct architecture.

For most modern Windows computers, select the Windows 64-bit version.

<img src="/assets/Choose_Os_with_arc.png" alt="Choose OS and Architecture" style="max-width:100%;"/>

> Before installation: Understand the basic concept of Veyon. The Master is the computer used by the teacher or administrator, while the Client computers are the systems that will be monitored and controlled.

## Install Veyon on the Master System

Install Veyon on the computer that you will use as the Master.

After installation, open:

```text
Veyon Configurator
```

## Configure General Settings

In Veyon Configurator, open the General section and configure the required settings.

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; align-items:start; margin:1.25rem 0;">
<img src="/assets/Config_general1.png" alt="Veyon General Settings" style="width:100%; height:auto; margin:0; border:none;"/>

<img src="/assets/Config_general2.png" alt="Veyon General Settings" style="width:100%; height:auto; margin:0; border:none;"/>
</div>

## Configure Veyon Service

Next, open the Service section and configure the Veyon Service.

<img src="/assets/Config_service.png" alt="Veyon Service Configuration" style="max-width:100%;"/>

Make sure the Veyon Service is enabled and running on the Master system.

## Configure Authentication

Open the Authentication section.

For this setup, use Key File Authentication.

<img src="/assets/Config_Auth_key1.png" alt="Veyon Authentication Configuration" style="max-width:100%;"/>

## Create an Authentication Key Pair

Create a new authentication key pair.

The key pair contains:

```text
Private Key
Public Key
```

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; align-items:start; margin:1.25rem 0;">
<img src="/assets/Config_Auth_key2.png" alt="Create Authentication Key" style="width:100%; height:auto;"/>

<img src="/assets/Config_Auth_key3.png" alt="Authentication Key Settings" style="width:100%; height:auto;"/>
</div>

## Export the Authentication Keys

Export the authentication keys after creating the key pair.

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; align-items:start; margin:1.25rem 0;">
<img src="/assets/Config_Auth_key4.png" alt="Export Authentication Key" style="width:100%; height:auto;"/>

<img src="/assets/Config_Auth_key5.png" alt="Authentication Key Export" style="width:100%; height:auto;"/>
</div>

Keep the private key secure and accessible only to the administrator.

The public key can be copied to a USB drive or a shared folder so that it can be used later during the Client configuration.

> Important: Never share the private key with unauthorized users.

## Configure Locations and Computers

After configuring authentication, open:

```text
Veyon Configurator
        ↓
Locations & Computers
```

This section is used to create the computer lab location and add the computers that you want to manage.

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:1rem; align-items:start; margin:1.25rem 0;">
<img src="/assets/Config_loc_&_comp1.png" alt="Veyon Locations and Computers" style="width:100%; height:auto;"/>

<img src="/assets/Config_loc_&_comp2.png" alt="Veyon Computer Configuration" style="width:100%; height:auto;"/>
</div>

For example, create a location:

```text
Computer Lab 1
```

Then add the computers inside that location.

For each computer, you will need:

```text
Name
Host Address / IP Address
MAC Address
```

You can get these details from the respective Client computer.

### Computer Name

On the Client computer, open Command Prompt and run:

```cmd
hostname
```

Example:

```text
LAB-PC-01
```

### IP Address

Run:

```cmd
ipconfig
```

Find the:

```text
IPv4 Address
```

Example:

```text
192.168.1.101
```

### MAC Address

Run:

```cmd
ipconfig /all
```

Find:

```text
Physical Address
```

Example:

```text
AA-BB-CC-11-22-33
```

You can then add the computer to Veyon using:

```text
Name:
LAB-PC-01

Host Address:
192.168.1.101

MAC Address:
AA-BB-CC-11-22-33
```

Repeat this process for each computer in the laboratory.

> Tip: If the computers receive changing IP addresses through DHCP, consider using DHCP reservations or reliable hostnames to make the Veyon configuration easier to maintain.

---

At this point, the Master configuration is complete.

The next part will cover the Client configuration, including installing Veyon, configuring General and Service settings, and importing the Public Key.