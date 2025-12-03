Add-Type -AssemblyName System.Drawing

$images = @('transport.jpg', 'asbestos.jpg', 'permit.jpg', 'ifsc.jpg')

foreach ($imageName in $images) {
    $path = "public/$imageName"
    
    if (Test-Path $path) {
        Write-Host "Converting $imageName..."
        $temp = "public/$imageName-converted.jpg"
        
        try {
            $img = [System.Drawing.Image]::FromFile($path)
            $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
            $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters 1
            $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 90L)
            $img.Save($temp, $encoder, $encoderParams)
            $img.Dispose()
            Move-Item -Force $temp $path
            Write-Host "✅ Converted $imageName"
        } catch {
            Write-Host "❌ Failed to convert $imageName : $_"
        }
    } else {
        Write-Host "⚠️  $imageName not found, skipping..."
    }
}

Write-Host "`n✨ Conversion complete!"

