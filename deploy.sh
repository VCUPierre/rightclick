#!/bin/sh

#variables
customDir=$1
currentPath=$(PWD)
dirArray=(static css js media)
cpanelUser=<user>
cpanelToken=<token>
cpanelIP=<IP>
apiUrl=<apiUrl>
apiMakeDir='Fileman&cpanel_jsonapi_func=mkdir&path='
apiDeleteDir="Fileman&cpanel_jsonapi_func=fileop&op=trash&sourcefiles=public_html"
apiUploadFile='execute/Fileman/upload_files?dir=/home/user/public_html'
apiCopyHta="Fileman&cpanel_jsonapi_func=fileop&op=copy&sourcefiles=public_html/.htaccess&destfiles="
apiDirExists='execute/Fileman/get_file_information?path=public_html'

function Dir_Exists()
{
    echo "***Checking if dir /${customDir} exists"

    local output=`curl -H"Authorization: cpanel ${cpanelUser}:${cpanelToken}" "${apiUrl}${cpanelToken}/${apiDirExists}/${customDir}"`
    output=$( echo $output | python3 -c "import sys, json; print(json.load(sys.stdin)['status'])")

    echo "**Dir Exists status - ${output} (1 = exists , 0 = doesn't exist)"

    if [ "$output" == "1" ];
    then
        return 0
    fi
    return 1
}

function Delete_Dir()
{
    echo "***Removing dir /${customDir}"

    local output=`curl -H"Authorization: cpanel ${cpanelUser}:${cpanelToken}" "${apiUrl}${cpanelToken}/json-api/cpanel?cpanel_jsonapi_user=${cpanelUser}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=${apiDeleteDir}/${customDir}"`
    output=$( echo $output | python3 -c "import sys, json; print(json.load(sys.stdin)['cpanelresult']['postevent']['result'])");

    echo "**Dir Deletion status - ${output} (1 = success , 0 = fail)"

    if [ "$output" == "0" ];
    then
        echo "**error deleting dir"
        return 1
    fi
    return 0
}

function Create_Dir()
{
    echo "***Creating dir /${customDir} and subfolders"

    local output=`curl -H"Authorization: cpanel ${cpanelUser}:${cpanelToken}" "${apiUrl}${cpanelToken}/json-api/cpanel?cpanel_jsonapi_user=${cpanelUser}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=${apiMakeDir}public_html&name=${customDir}"`
    output=$( echo $output | python3 -c "import sys, json; print(json.load(sys.stdin)['cpanelresult']['postevent']['result'])")

    echo "**/${customDir} Dir Creation status - ${output} (1 = success , 0 = fail)"

    # create directories in $customDir [static, static/css, static/js, static/media]
    for i in {0..3}
    do
        if [ "$i" == "0" ];
        then
            output=`curl -H"Authorization: cpanel ${cpanelUser}:${cpanelToken}" "${apiUrl}${cpanelToken}/json-api/cpanel?cpanel_jsonapi_user=${cpanelUser}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=${apiMakeDir}public_html/${customDir}&name=${dirArray[$i]}"`
            output=$( echo $output | python3 -c "import sys, json; print(json.load(sys.stdin)['cpanelresult']['postevent']['result'])")

            echo "**/${customDir}/static Dir Creation status - ${output} (1 = success , 0 = fail)"
        else
            output=`curl -H"Authorization: cpanel ${cpanelUser}:${cpanelToken}" "${apiUrl}${cpanelToken}/json-api/cpanel?cpanel_jsonapi_user=${cpanelUser}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=${apiMakeDir}public_html/${customDir}/static&name=${dirArray[$i]}"`
            output=$( echo $output | python3 -c "import sys, json; print(json.load(sys.stdin)['cpanelresult']['postevent']['result'])")

            echo "**/${customDir}/static/${dirArray[$i]} Dir Creation status - ${output} (1 = success , 0 = fail)"
        fi
    done
}

function Copy_Hta()
{
    echo "***Copying .htaaccess file to /${customDir}"

    local output=`curl -H"Authorization: cpanel ${cpanelUser}:${cpanelToken}" "${apiUrl}${cpanelToken}/json-api/cpanel?cpanel_jsonapi_user=${cpanelUser}&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=${apiCopyHta}${customDir}/.htaccess"`
    output=$( echo $output | python3 -c "import sys, json; print(json.load(sys.stdin)['cpanelresult']['postevent']['result'])")

    echo "**Copy htaccess file status - ${output} (1 = success , 0 = fail)"

}

function Upload_Files()
{
    echo "***Uploading Build files to /${customDir}"

    for filename in $(ls $PWD/build);
    do
        scp -i ~/.ssh/id_rsa $PWD/build/$filename $cpanelUser@$cpanelIP:public_html/${customDir} && echo "Uploaded ${filename} successfully into ${customDir}!"
        printf "\n******\n";
    done;

    for filename in $(ls $PWD/build/static/css);
    do
        scp -i ~/.ssh/id_rsa -o HostKeyAlgorithms=ssh-rsa,ssh-dss $PWD/build/static/css/$filename $cpanelUser@$cpanelIP:public_html/${customDir}/static/css && echo "Uploaded ${filename} successfully into ${customDir}/css!"
        printf "\n******\n";
    done;

    for filename in $(ls $PWD/build/static/js);
    do
        scp -i ~/.ssh/id_rsa -o HostKeyAlgorithms=ssh-rsa,ssh-dss $PWD/build/static/js/$filename $cpanelUser@$cpanelIP:public_html/${customDir}/static/js && echo "Uploaded ${filename} successfully into ${customDir}/js!"
        printf "\n******\n";
    done;

    for filename in $(ls $PWD/build/static/media);
    do
        scp -i ~/.ssh/id_rsa -o HostKeyAlgorithms=ssh-rsa,ssh-dss $PWD/build/static/media/$filename $cpanelUser@$cpanelIP:public_html/${customDir}/static/media && echo "Uploaded ${filename} successfully into ${customDir}/media!"
        printf "\n******\n";
    done;
}

# ********** Main **********
echo "Starting Server Deployment"
sleep 2

if Dir_Exists;
then
    Delete_Dir
fi

sleep 2
Create_Dir

sleep 2
Copy_Hta

sleep 2
Upload_Files

sleep 2
printf "Finish Server Deployment - Site is live\nhttps://right-link.com/${customDir}\n"
