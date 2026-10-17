# What Is Veyon?

Veyon helps teachers and IT staff manage classroom computers from one computer. It is commonly used in school and college labs.

The teacher computer runs **Veyon Master**. The computers being managed are **Clients**. Staff can view or control screens, demonstrate lessons, open apps, and manage sessions, depending on setup and permissions.

## Who is this guide for?

- Teachers who use computers for lessons.
- IT staff setting up a school or college lab.
- Administrators who manage several computers.

This guide focuses on a Windows setup. Veyon also supports Linux and macOS. Check the <a href="https://veyon.io/download/" target="_blank" rel="noopener noreferrer">download page</a> for current platform details.

## What do you need?

- One Master computer and the Client computers.
- Permission to install software and configure each computer.
- A working local network connecting them.
- Each Client's computer name or IP address.
- One authentication method configured on all computers. For key authentication, keep the private key secure and install only the public key on Clients.

Download Veyon from <a href="https://veyon.io/download/" target="_blank" rel="noopener noreferrer">veyon.io/download</a>.

![Veyon download page and available operating system options](/assets/To_Download.png)

## How it works

Veyon Master connects to the Clients over the network. The Master needs a list of computers and locations, and both sides need matching authentication settings.

## Install Veyon

Install Veyon on the Master and every Client. On Client-only computers, deselect **Veyon Master** during installation.

![Choose an operating system in the Veyon installer](/assets/Choose_Os_with_arc.png)

## Configure the Master

Open **Veyon Configurator** on the Master. The setup notes use these settings:

- **Authentication:** Logon authentication
- **Network object directory:** Builtin
- **User groups:** Default system groups

<div class="image-grid">
<img src="/assets/Config_general1.png" alt="General settings in Veyon Configurator" />
<img src="/assets/Config_general2.png" alt="More general settings" />
</div>

For the service plugin, the notes select **Builtin VNC Server (UltraVNC)**.

![Veyon service configuration](/assets/Config_service.png)

### Set up authentication keys

1. Create and export a key pair in **Authentication keys**.
2. Keep the private key on the Master and protect it.
3. Copy the public key to a USB drive or secure network share for the Clients.
4. Apply the settings.

<div class="image-grid">
<img src="/assets/Config_Auth_key1.png" alt="Authentication key settings" />
<img src="/assets/Config_Auth_key2.png" alt="Authentication key options" />
<img src="/assets/Config_Auth_key3.png" alt="Exporting authentication keys" />
<img src="/assets/Config_Auth_key4.png" alt="Authentication key example" />
<img src="/assets/Config_Auth_key5.png" alt="Authentication key export example" />
</div>

> The notes list both Logon authentication and key creation. These are different methods. Choose one method and configure the Master and Clients consistently.

## Configure the Clients

1. Open **Veyon Configurator** on each Client.
2. Match the Master’s applicable General and Service settings.
3. Import the public key if using key authentication. Do not create a new key pair on each Client.
4. Apply the settings.

## Find a computer name and MAC address

On a Windows Client, open Command Prompt and run:

```cmd
hostname
```

To find the MAC address, run:

```cmd
getmac
```

Use the address for the adapter connected to the lab network. `ipconfig /all` also shows it as **Physical Address**.

## Add Clients to the Master

1. In Veyon Configurator, open **Locations & Computers**.
2. Create a location, such as `Computer Lab 1`.
3. Add each Client with a name, hostname or IP address, and MAC address.
4. Apply the configuration.

<div class="image-grid">
<img src="/assets/Config_loc_&_comp1.png" alt="Locations and computers settings" />
<img src="/assets/Config_loc_&_comp2.png" alt="Adding a computer to a location" />
</div>

## Check the setup

Open **Veyon Master** and confirm the Clients appear. Test screen viewing or another permitted action.

If a Client is unavailable, check the network, address, running service, and authentication settings.

## Optional: Wake-on-LAN

Wake-on-LAN requires compatible hardware and network settings. On Windows, the notes recommend turning off Fast Startup:

1. Open **Power Options** → **Choose what the power buttons do**.
2. Select **Change settings that are currently unavailable**.
3. Clear **Turn on fast startup** and save.

## Other notes

The notes include this PowerShell example for running a script:

```powershell
powershell.exe -ExecutionPolicy Bypass -File "C:\path\to\your_script.ps1"
```

Replace the example path with your script path. They also mention HFS for sharing files over HTTP, but do not include a complete setup procedure.
