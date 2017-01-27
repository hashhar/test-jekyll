$newconfig_file = Get-Item _config.yml
Rename-Item _config.yml _config.yml.old
$newconfig = Get-Content _config.yml.old | %{$_ -replace "baseurl","#baseurl"}
[IO.File]::WriteAllLines($newconfig_file.FullName, $newconfig)
Remove-Item _config.yml.old
