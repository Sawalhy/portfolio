Add-Type -AssemblyName System.Drawing
$path = 'public/Priceintel.jpg'
$temp = 'public/Priceintel-converted.jpg'
$img = [System.Drawing.Image]::FromFile($path)
$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 90L)
$img.Save($temp, $encoder, $encoderParams)
$img.Dispose()
Move-Item -Force $temp $path

