    <!-- git là gì? -->
    - quản lý code, làm việc với team

    <!-- git flow -->
    - kho tổng (nhánh chính: master)

    <!-- một số thuật ngữ -->
    - Repository: nơi lưu trữ program và file ở trong hệ thống quản lý version 
    -- local repository: 
        cá nhân hoặc server, ngoài ra có thể chép repository từ remote
    -- remote repository:
        Ropository nằm ngoài, có thể thao tác thông qua local, pulic trên internet

    - Working tree
    -- nơi user edit tạo file mới

    - index
    -- nơi bảo trì trạng thái sau khi edit trên working trê là đối tượng tiếp theo trước khi commit lên repo

    -Branch
    -- phân nhánh ghi chép lịch sử, không bị ảnh hướng nhánh khác có thể có nhiều thay đổi trong repo giống nhau
    -- 3 loaị:
        local Branch: branch quản lý trong local repo
        remote Branch: trong remote repo
        remote tracking Branch: để local repo tracking remote branch. ví dụ origin/master biểu thị cho việc đang tracking branch master có ở remote repo gọi là origin

    - check out 
    -- triển khai branch ở repo lên working tree

    -tag
    -- tên được gắn vào để có thể dễ dàng tham chiếu commit

    - commit
    --Message gắn vào khi thay đổi file 

    - revision
    -- hash value được tạo mỗi lần commit, sử dụng hash value để quản lý theo thế hệ

    - head
    -- từ chỉ định commit mới nhất của branch đang check out hiện tại

    -fetch_head
    --từ chỉ định commit mới nhất của remote branch đã lấy cuối cùng

    -Merge_head
    -- được tạo ra trong quá trình trộn, ghi lại commit trộn branch

    -Work flow cơ bản
    --tạo repo tạo file và edit ghi chép lên index commit lên repo, thiết lập ban đầu

    version contol

    git init
    repo giống lưu trữ lịch sử
    working directory floder
    s

    step1: git init
    - khởi tạo repo dưới local
    <!-- git là gì? -->
    - quản lý code, làm việc với team

    <!-- git flow -->
    - kho tổng (nhánh chính: master)

    <!-- một số thuật ngữ -->
    - Repository: nơi lưu trữ program và file ở trong hệ thống quản lý version 
    -- local repository: 
        cá nhân hoặc server, ngoài ra có thể chép repository từ remote
    -- remote repository:
        Ropository nằm ngoài, có thể thao tác thông qua local, pulic trên internet

    - Working tree
    -- nơi user edit tạo file mới

    - index
    -- nơi bảo trì trạng thái sau khi edit trên working trê là đối tượng tiếp theo trước khi commit lên repo

    -Branch
    -- phân nhánh ghi chép lịch sử, không bị ảnh hướng nhánh khác có thể có nhiều thay đổi trong repo giống nhau
    -- 3 loaị:
        local Branch: branch quản lý trong local repo
        remote Branch: trong remote repo
        remote tracking Branch: để local repo tracking remote branch. ví dụ origin/master biểu thị cho việc đang tracking branch master có ở remote repo gọi là origin

    - check out 
    -- triển khai branch ở repo lên working tree

    -tag
    -- tên được gắn vào để có thể dễ dàng tham chiếu commit

    - commit
    --Message gắn vào khi thay đổi file 

    - revision
    -- hash value được tạo mỗi lần commit, sử dụng hash value để quản lý theo thế hệ

    - head
    -- từ chỉ định commit mới nhất của branch đang check out hiện tại

    -fetch_head
    --từ chỉ định commit mới nhất của remote branch đã lấy cuối cùng

    -Merge_head
    -- được tạo ra trong quá trình trộn, ghi lại commit trộn branch

    -Work flow cơ bản
    --tạo repo tạo file và edit ghi chép lên index commit lên repo, thiết lập ban đầu

    version contol

    git init
    repo giống lưu trữ lịch sử
    working directory floder
    s

    step1: git init
    - khởi tạo repo dưới local

    step2: git checkout -b tagname
    - tạo nhánh mới có tên là tagname

    step3: commit code
    -git add fileName -> add từng file
    -git add . -> add tất cả các file
    -git commit -m "Message" -> commit

    -git status -> kiểm tra trạng thái


    step4: Add remote
    -chỉ định đường dẫn up code 
    -git remote add origin <linkRemote>

    step5: push code
    -git push origin branchName -> push code lên branch name

    step6: merge branch
    -git merge branchName -> merge branchName vào branch
    note: xử lý xung đột 2 branch sửa cùng 1 file(conflict)
    commit bra1 -> commit bra2 -> git merge branch1(merge 1 vào2) [xung đột 2 branch sửa cùng 1 file]
    fix: branch2 sửa lại file (+sửa branch 1) -> commit => xong

    note:câu lệnh cơ bản
    -git branch branchName -> tạo nhánh
    -git log --online -> list commit
    -git checkout branchName -> chuyển về nhánh
    -git checkout . -> loại bỏ modified
    -git branch -d branchName ->xóa 1 nhánh 
    -git branch -> list branch
    <!-- step by step start project -->
    -git remote add origin <linkRemote> -> thêm mới một remote
    git checkout -b branchName -> tạo nhánh và chuyển sang nhánh đó
    -git add fileName -> add 1 file
    -git add . -> add tất cả file
    -git commit -m "Message" -> commit code( code vẫn dưới local)
    -git push origin branchName -> đẩy code lên nhánh(origin tên nhánh ta đặt)
    -git pull origin branchName -> pull code from branchName( kéo code mới nhất của nhánh đó)

    <!-- git có 3 trạng thái -->
    -commited: data an toàn đã commit thành công
    -staged: đã add chưa commit
    -modified: chưa add

    -git commit --amend "message": commit này đè lên commit trước
    <!-- phân biệt git merge và git rebase -->
    -git merge: lấy commit cuối cùng của cả 2 gộp nhánh tạo ra mới không thay đổi lịch sử commit
    -git rebase: lấy base của cái 2 gộp với cái chung => tạo ra nhánh thay đổi lịch sử commit
    <!-- loại bỏ file đưa vào staged -->
    -git reset ( reset lại file hoặc thư mục về ban đầu)
    <!-- remote -->
    -git remote add origin <linkRemote> -> thêm remote mới
    -git remote -> list remote
    -git remote set-url origin <linkRemote> -> thay đổi link
    -git remote rm remoteName -> xóa remote name
    -git remote rename oldName newName -> đổi tên remote

    <!-- --------------------------------- -->
    -cách push data lên github
    --th1: branch mới tạo:
        -tạo branch trên local thì trên github ko tồn tại -> sử dụng thêm 1 tham số kèm theo
        -eg: git push --set-upstream origin branchName
    --th2: branch cũ:
        --git checkout branchName
        --git add .
        --git commit -m "Message"
        -git push origin branchName

    <!-- git: thao tác với thư mục -->
    - cd nameFolder: chuyển sang thư mục
    - ls: list file or floder
    - mkdir nameFolder: tạo folder mới
    - rmdir nameFolder: xóa folder
    - pwd: xem đường dẫn hiện tại

    delete branch 
    - bước 1: delete branch on remote: git push origin --delete branchName
    - bước 2: delete branch on local: git branch - d branchName
    