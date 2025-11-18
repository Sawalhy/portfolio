Add-Type -AssemblyName System.Drawing
$path = 'public/originals/Priceintel.jpg'
if (Test-Path $path) {
  $temp = 'public/originals/Priceintel-converted.jpg'
  $img = [System.Drawing.Image]::FromFile($path)
  $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
  $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
  $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 90L)
  $img.Save($temp, $encoder, $encoderParams)
  $img.Dispose()
  Move-Item -Force $temp $path
  Write-Host 'Converted original Priceintel.jpg'
} else {
  Write-Host 'Original Priceintel.jpg not found'
}

