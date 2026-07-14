<?php

require_once "config.php";

function sendVerificationEmail($to_email, $to_username, $code) {
    global $brevo_api_key, $brevo_sender_email, $brevo_sender_name;

    $subject = "Your AniSuffle verification code";

    $uname = htmlspecialchars($to_username);
    $vcode = htmlspecialchars($code);

    $body = <<<HTML
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0; padding:0; background-color:#1a1440; background-image: linear-gradient(135deg, #2b1f6e 0%, #6a2f8f 45%, #b4479c 100%);">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 16px;">
    <tr>
      <td align="center">

        <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="max-width: 480px; width: 100%; background: linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.20) 40%, rgba(255,255,255,0.32) 100%); border: 1px solid rgba(255,255,255,0.75); border-radius: 28px; box-shadow: 0 10px 40px rgba(20, 4, 60, 0.5), inset 0 1px 0 rgba(255,255,255,0.8);">
          <tr>
            <td style="padding: 0; -webkit-backdrop-filter: blur(24px) saturate(160%); backdrop-filter: blur(24px) saturate(160%); border-radius: 28px;">

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height: 46px; background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%); border-radius: 28px 28px 0 0;"></td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 6px 24px 40px 24px;">

                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" style="padding-bottom: 26px;">
                          <span style="display:inline-block; padding: 8px 22px; background: linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 100%); border: 1px solid rgba(255,255,255,0.6); border-radius: 999px; color:#ffffff; font-family: Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;">
                            AniSuffle
                          </span>
                        </td>
                      </tr>
                    </table>

                    <!-- Greeting(˶ˆᗜˆ˵) -->
                    <p style="margin:0 0 8px 0; font-family: Helvetica, Arial, sans-serif; font-size: 22px; font-weight: 600; color:#ffffff; text-align:center; text-shadow: 0 1px 6px rgba(0,0,0,0.15);">
                      Hey {$uname} 👋
                    </p>
                    <p style="margin:0 0 30px 0; font-family: Helvetica, Arial, sans-serif; font-size: 15px; color: rgba(255,255,255,0.9); text-align:center; line-height: 1.5;">
                      Here's your verification code. Enter it to confirm it's really you.
                    </p>


                    <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" style="padding: 22px 8px; background: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.22) 55%, rgba(255,255,255,0.42) 100%); border-top: 1px solid rgba(255,255,255,0.85); border-bottom: 1px solid rgba(255,255,255,0.5); border-radius: 999px; box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -8px 16px rgba(255,255,255,0.18);">
                          <span style="display:inline-block; white-space: nowrap; font-family: 'Courier New', monospace; font-size: 30px; font-weight: 700; letter-spacing: 10px; color:#ffffff; text-shadow: 0 2px 10px rgba(0,0,0,0.45), 0 0 1px rgba(0,0,0,0.55);">
                            {$vcode}
                          </span>
                        </td>
                      </tr>
                    </table>

                    <p style="margin:26px 0 0 0; font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: rgba(255,255,255,0.65); text-align:center; line-height:1.5;">
                      This code expires in 1 hour.<br>
                      If you didn't sign up for AniSuffle, you can safely ignore this email.
                    </p>

                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>

        <p style="margin: 24px 0 0 0; font-family: Helvetica, Arial, sans-serif; font-size: 12px; color: rgba(255,255,255,0.5);">
          © {$uname}'s AniSuffle account · This is an automated message
        </p>

      </td>
    </tr>
  </table>
</body>
</html>
HTML;

    $data = [
        "sender" => ["name" => $brevo_sender_name, "email" => $brevo_sender_email],
        "to" => [["email" => $to_email, "name" => $to_username]],
        "subject" => $subject,
        "htmlContent" => $body
    ];

    $ch = curl_init("https://api.brevo.com/v3/smtp/email");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "accept: application/json",
        "content-type: application/json",
        "api-key: " . $brevo_api_key
    ]);

    $response = curl_exec($ch);
    if ($response === false) {
        error_log("Brevo cURL error: " . curl_error($ch));
        curl_close($ch);
        return false;
    }

    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    if ($http_code >= 200 && $http_code < 300) {
        return true;
    }

    error_log("Brevo send failed, HTTP $http_code: $response");

    return false;
}