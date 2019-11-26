<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>POS LSP</title>
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="/gleek/gleek/assets/images/favicon.png">
    <link href="/gleek/gleek/main/css/style.css" rel="stylesheet">
    <link href="/gleek/gleek/assets/plugins/datatables/css/jquery.dataTables.min.css" rel="stylesheet">
</head>

<body>
    
    <!--*******************
        Preloader start
    ********************-->
    <div id="preloader">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10" />
            </svg>
        </div>
    </div>
    <!--*******************
        Preloader end
    ********************-->

    
    <!--**********************************
        Main wrapper start
    ***********************************-->
    <div id="main-wrapper">

        <!--**********************************
            Nav header start
        ***********************************-->
        <div class="nav-header">
            <div class="brand-logo"><a href="{{route('superadmin')}}"><b><img src="/gleek/gleek/assets/images/logo.png" alt=""> </b><span class="brand-title"><img src="/gleek/gleek/assets/images/logo-text.png" alt=""></span></a>
            </div>
            <div class="nav-control">
                <div class="hamburger"><span class="line"></span>  <span class="line"></span>  <span class="line"></span>
                </div>
            </div>
        </div>
        <!--**********************************
            Nav header end
        ***********************************-->

        <!--**********************************
            Header start
        ***********************************-->
        <div class="header">    
            <div class="header-content">
                <div class="header-left">
                    <ul>
                        <li class="icons position-relative"><a href="javascript:void(0)"><i class="icon-magnifier f-s-16"></i></a>
                            <div class="drop-down animated bounceInDown">
                                <div class="dropdown-content-body">
                                    <div class="header-search" id="header-search">
                                        <form action="#">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Search">
                                                <div class="input-group-append"><span class="input-group-text"><i class="icon-magnifier"></i></span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="header-right">
                    <ul>
                        <li class="icons">
                            <a href="javascript:void(0)">
                                <i class="mdi mdi-bell"></i>
                                <div class="pulse-css"></div>
                            </a>
                            <div class="drop-down animated bounceInDown dropdown-notfication">
                                <div class="dropdown-content-body">
                                    <ul>
                                        @php
                                            $pengumuman = \App\Pengumuman::orderBy('id', 'DESC')->limit(3)->get();
                                        @endphp
                                        @foreach($pengumuman as $pengumumans)
                                        @foreach($pengumumans->relasiuser as $users)
                                        <li>
                                            <a href="javascript:void()">
                                                <span class="mr-3 avatar-icon bg-success-lighten-2"><i class="fa fa-check"></i></span>
                                                <div class="notification-content">
                                                    <div class="notification-heading">{{$users->name}}</div>
                                                    <span class="notification-text">{{$pengumumans->pengumuman}}</span> 
                                                    <small class="notification-timestamp">{{$pengumumans->created_at}}</small>
                                                </div>
                                            </a>
                                            <span class="notify-close"><i class="ti-close"></i>
                                                </span>
                                        </li>
                                        @endforeach
                                        @endforeach
                                        {{-- <li class="text-left"><a href="javascript:void()" class="more-link">Show All Notifications</a>  <span class="pull-right"><i class="fa fa-angle-right"></i></span>
                                        </li> --}}
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="icons">
                            <a href="javascript:void(0)" class="log-user">
                                <img src="/gleek/gleek/assets/images/avatar/1.jpg" alt=""> <span>{{Auth::user()->name}}</span>  <i class="fa fa-caret-down f-s-14" aria-hidden="true"></i>
                            </a>
                            <div class="drop-down dropdown-profile animated bounceInDown">
                                <div class="dropdown-content-body">
                                    <ul>
                                        <li><a href="{{route('superadmin_profile')}}"><i class="icon-user"></i> <span>My Profile</span></a>
                                        </li>
                                        {{-- <li><a href="javascript:void()"><i class="icon-lock"></i> <span>Lock Screen</span></a>
                                        </li> --}}
                                        <li><a href="{{route('logout')}}"><i class="icon-power"></i> <span>Logout</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--**********************************
            Header end
        ***********************************-->

        <!--**********************************
            Sidebar start
        ***********************************-->
        <div class="nk-sidebar">           
            <div class="nk-nav-scroll">
                <ul class="metismenu" id="menu">
                    <li class="nav-label">Dashboard</li>
                    <li class="mega-menu mega-menu-lg">
                        <a href="{{route('superadmin')}}" aria-expanded="false">
                            <i class="mdi mdi-view-dashboard"></i><span class="nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-label">Fitur</li>
                    <li class="mega-menu mega-menu-md"><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i class="mdi mdi-television-guide"></i><span class="nav-text">Brand </span> </a>
                        <ul aria-expanded="false">
                            <li><a href="{{route('brand')}}">Detail</a>
                            </li>
                        </ul>
                    </li>
                    <li class="mega-menu mega-menu-md"><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i class="mdi mdi-television-guide"></i><span class="nav-text">Pengguna </span> </a>
                        <ul aria-expanded="false">
                            <li><a href="{{route('pengguna')}}">Detail</a>
                            </li>
                        </ul>
                    </li>
                    <li class="mega-menu mega-menu-md"><a class="has-arrow" href="javascript:void()" aria-expanded="false"><i class="mdi mdi-television-guide"></i><span class="nav-text">Pengumuman </span> </a>
                        <ul aria-expanded="false">
                            <li><a href="{{route('pengumuman')}}">Detail</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!--**********************************
            Sidebar end
        ***********************************-->

        <!--**********************************
            Content body start
        ***********************************-->
        @yield('content')
        <!--**********************************
            Content body end
        ***********************************-->
        
        
        <!--**********************************
            Footer start
        ***********************************-->
        <div class="footer">
            <div class="copyright">
                <p>Copyright &copy; Designed by <a href="https://mediabebas.com">Digitalheaps</a>, Developed by <a href="https://mediabebas.com">Firman Kurniawan</a> 2019</p>
            </div>
        </div>
        <!--**********************************
            Footer end
        ***********************************-->

        
        <!--**********************************
            Right sidebar start
        ***********************************-->
        <div class="sidebar-right">
            <a class="sidebar-right-trigger" href="javascript:void(0)">
                <span><i class="mdi mdi-tune"></i></span>
            </a>
            <div class="sidebar-right-inner">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item"><a class="nav-link active show" data-toggle="tab" href="#home8"><span><i class="mdi mdi-wrench" aria-hidden="true"></i>
                    </span></a>
                    </li>
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#profile8"><span><i class="mdi mdi-reload" aria-hidden="true"></i>
                    </span></a>
                    </li>
                    <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#messages8"><span><i class="mdi mdi-message-reply-text" aria-hidden="true"></i>
                    </span></a>
                    <!-- </li><li class="nav-item"><a class="nav-link" data-toggle="tab" href="#messages9"><span><i class="fa fa-cog"></i></span></a>
                    </li> -->
                </ul>

                <div class="tab-content tab-content-default tabcontent-border">
                    <div class="tab-pane fade active show" id="home8" role="tabpanel">
                        <div class="admin-settings">
                            <h4>Pick your style</h4>
                            <div>
                                <p>Background</p>
                                <select class="form-control" name="theme_version" id="theme_version">
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>
                            <div>
                                <p>Layout</p>
                                <select class="form-control" name="theme_layout" id="theme_layout">
                                    <option value="vertical">Vertical</option>
                                    <option value="horizontal">Horizontal</option>
                                </select>
                            </div>
                            <div>
                                <p>Sidebar</p>
                                <select class="form-control" name="sidebar_style" id="sidebar_style">
                                    <option value="full">Full</option>
                                    <option value="mini">Mini</option>
                                    <option value="compact">Compact</option>
                                    <option value="overlay">Overlay</option>
                                </select>
                            </div>
                            <div>
                                <p>Sidebar position</p>
                                <select class="form-control" name="sidebar_position" id="sidebar_position">
                                    <option value="static">Static</option>
                                    <option value="fixed">Fixed</option>
                                </select>
                            </div>
                            <div>
                                <p>Header position</p>
                                <select class="form-control" name="header_position" id="header_position">
                                    <option value="static">Static</option>
                                    <option value="fixed">Fixed</option>
                                </select>
                            </div>
                            <div>
                                <p>Container</p>
                                <select class="form-control" name="container_layout" id="container_layout">
                                    <option value="wide">Wide</option>
                                    <option value="boxed">Boxed</option>
                                    <option value="wide-boxed">Wide Boxed</option>
                                </select>
                            </div>
                            <div>
                                <p>Direction</p>
                                <select class="form-control" name="theme_direction" id="theme_direction">
                                    <option value="ltr">LTR</option>
                                    <option value="rtl">RTL</option>
                                </select>
                            </div>
                            <div>
                                <p>Navigation Header</p>
                                <div>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_1" class="filled-in chk-col-primary" id="nav_header_bg_1">
                                        <label for="nav_header_bg_1"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_2" class="filled-in chk-col-primary" id="nav_header_bg_2">
                                        <label for="nav_header_bg_2"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_3" class="filled-in chk-col-primary" id="nav_header_bg_3">
                                        <label for="nav_header_bg_3"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_4" class="filled-in chk-col-primary" id="nav_header_bg_4">
                                        <label for="nav_header_bg_4"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_5" class="filled-in chk-col-primary" id="nav_header_bg_5">
                                        <label for="nav_header_bg_5"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_6" class="filled-in chk-col-primary" id="nav_header_bg_6">
                                        <label for="nav_header_bg_6"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_7" class="filled-in chk-col-primary" id="nav_header_bg_7">
                                        <label for="nav_header_bg_7"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_8" class="filled-in chk-col-primary" id="nav_header_bg_8">
                                        <label for="nav_header_bg_8"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_9" class="filled-in chk-col-primary" id="nav_header_bg_9">
                                        <label for="nav_header_bg_9"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="navigation_header" value="color_10" class="filled-in chk-col-primary" id="nav_header_bg_10">
                                        <label for="nav_header_bg_10"></label>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p>Header</p>
                                <div>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_1" class="filled-in chk-col-primary" id="header_bg_1">
                                        <label for="header_bg_1"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_2" class="filled-in chk-col-primary" id="header_bg_2">
                                        <label for="header_bg_2"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_3" class="filled-in chk-col-primary" id="header_bg_3">
                                        <label for="header_bg_3"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_4" class="filled-in chk-col-primary" id="header_bg_4">
                                        <label for="header_bg_4"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_5" class="filled-in chk-col-primary" id="header_bg_5">
                                        <label for="header_bg_5"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_6" class="filled-in chk-col-primary" id="header_bg_6">
                                        <label for="header_bg_6"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_7" class="filled-in chk-col-primary" id="header_bg_7">
                                        <label for="header_bg_7"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_8" class="filled-in chk-col-primary" id="header_bg_8">
                                        <label for="header_bg_8"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_9" class="filled-in chk-col-primary" id="header_bg_9">
                                        <label for="header_bg_9"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="header_bg" value="color_10" class="filled-in chk-col-primary" id="header_bg_10">
                                        <label for="header_bg_10"></label>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p>Sidebar</p>
                                <div>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_1" class="filled-in chk-col-primary" id="sidebar_bg_1">
                                        <label for="sidebar_bg_1"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_2" class="filled-in chk-col-primary" id="sidebar_bg_2">
                                        <label for="sidebar_bg_2"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_3" class="filled-in chk-col-primary" id="sidebar_bg_3">
                                        <label for="sidebar_bg_3"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_4" class="filled-in chk-col-primary" id="sidebar_bg_4">
                                        <label for="sidebar_bg_4"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_5" class="filled-in chk-col-primary" id="sidebar_bg_5">
                                        <label for="sidebar_bg_5"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_6" class="filled-in chk-col-primary" id="sidebar_bg_6">
                                        <label for="sidebar_bg_6"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_7" class="filled-in chk-col-primary" id="sidebar_bg_7">
                                        <label for="sidebar_bg_7"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_8" class="filled-in chk-col-primary" id="sidebar_bg_8">
                                        <label for="sidebar_bg_8"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_9" class="filled-in chk-col-primary" id="sidebar_bg_9">
                                        <label for="sidebar_bg_9"></label>
                                    </span>
                                    <span>
                                        <input type="radio" name="sidebar_bg" value="color_10" class="filled-in chk-col-primary" id="sidebar_bg_10">
                                        <label for="sidebar_bg_10"></label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile8" role="tabpanel">
                        <div class="sidebar-recent-activity ">
                            <h4 class="card-title">Recent Activity</h4>
                            <div class="timeline_content">
                                <ul class="timeline timeline-workplan">
                                    <li class="timeline-inverted">
                                        <div class="timeline-badge"></div>
                                        <div class="timeline-panel">
                                            <div class="media">
                                                <div class="media-body">
                                                    <p>After 3 hours</p>
                                                    <h6 class="mt-0 mb-0"><a href="javascript:void()" class="text-primary">Space X</a> is going to launch a Rocket</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="timeline-inverted">
                                        <div class="timeline-badge"></div>
                                        <div class="timeline-panel">
                                            <div class="media">
                                                <div class="media-body">
                                                    <p>5 minites ago</p>
                                                    <h6 class="mt-0 mb-0"><a href="javascript:void()" class="text-primary">Niloy</a> commented on your photo</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="timeline-inverted">
                                        <div class="timeline-badge"></div>
                                        <div class="timeline-panel">
                                            <div class="media">
                                                <div class="media-body">
                                                    <p>1 hour ago</p>
                                                    <h6 class="mt-0 mb-0"><a href="javascript:void()" class="text-primary">Bill Gates</a> likes your photo</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="timeline-inverted">
                                        <div class="timeline-badge"></div>
                                        <div class="timeline-panel">
                                            <div class="media">
                                                <div class="media-body">
                                                    <p>2 hours ago</p>
                                                    <h6 class="mt-0 mb-0"><a href="javascript:void()" class="text-primary">You</a> reacted on <a href="javascript:void()" class="text-primary">Shelly</a>'s photo</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="timeline-inverted">
                                        <div class="timeline-badge"></div>
                                        <div class="timeline-panel">
                                            <div class="media">
                                                <div class="media-body">
                                                    <p>2 days ago</p>
                                                    <h6 class="mt-0 mb-0"><a href="" class="text-primary">Elon Mask</a> invited you on an <a href="javascript:void()" class="text-primary">Event</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="timeline-inverted">
                                        <div class="timeline-badge"></div>
                                        <div class="timeline-panel">
                                            <div class="media">
                                                <div class="media-body">
                                                    <p>3 days ago</p>
                                                    <h6 class="mt-0 mb-0"><a href="" class="text-primary">Mark Jukarbarg</a> invited you on <a href="javascript:void()" class="text-primary">Facebook</a></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="sidebar-work-progress">
                            <h4 class="card-title mb-5">Daily prograss</h4>
                            <div class="progress-wrapper">
                                <h6 class="mb-3">Light Weight Lifting</h6>
                                <div class="progress mb-5">
                                    <div class="progress-bar bg-warning" style="width: 80%; height:6px;" role="progressbar"><span class="sr-only">60% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-wrapper">
                                <h6 class="mb-3">Push Ups</h6>
                                <div class="progress mb-5">
                                    <div class="progress-bar bg-danger" style="width: 60%; height:6px;" role="progressbar"><span class="sr-only">60% Complete</span>
                                    </div>
                                </div>
                            </div>
                            <div class="progress-wrapper">
                                <h6 class="mb-3">Step Aerobics</h6>
                                <div class="progress mb-5">
                                    <div class="progress-bar bg-dpink" style="width: 70%; height:6px;" role="progressbar"><span class="sr-only">60% Complete</span>
                                    </div>
                                </div>
                            </div>  
                            <div class="progress-wrapper">
                                <h6 class="mb-3">Down Aerobics</h6>
                                <div class="progress mb-5">
                                    <div class="progress-bar bg-lgreen" style="width: 90%; height:6px;" role="progressbar"><span class="sr-only">60% Complete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="messages8" role="tabpanel">
                        <div class="user-chat">
                            <ul class="list-group all-chats">
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/1.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity inactive"></span>
                                            <img src="/gleek/gleek/assets/images/user/2.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>22 minites ago</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/3.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/4.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity inactive"></span>
                                            <img src="/gleek/gleek/assets/images/user/4.jpg" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>26 minites ago</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/6.jpg" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/7.jpg" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/8.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/1.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/4.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity inactive"></span>
                                            <img src="/gleek/gleek/assets/images/user/2.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>52 minites ago</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity inactive"></span>
                                            <img src="/gleek/gleek/assets/images/user/2.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>22 Hours ago</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/6.jpg" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity active"></span>
                                            <img src="/gleek/gleek/assets/images/user/3.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>Online</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                                <li class="list-group-item single-chat border-0">
                                    <div class="media align-items-center">
                                        <div class="user-img mr-3">
                                            <span class="activity inactive"></span>
                                            <img src="/gleek/gleek/assets/images/user/8.png" height="40" width="40" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="mb-0">Lurch Schpel</h6>
                                            <small>6 Hours ago</small>
                                        </div>
                                        <a href="javascript:void()" class="chat-open d-inline-block px-2 py-1">
                                            <i class="fa fa-comment-o"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--**********************************
            Right sidebar end
        ***********************************-->
    </div>
    <!--**********************************
        Main wrapper end
    ***********************************-->

    <!--**********************************
        Scripts
    ***********************************-->
    <script src="/gleek/gleek/assets/plugins/common/common.min.js"></script>
    <script src="/gleek/gleek/main/js/custom.min.js"></script>
    <script src="/gleek/gleek/main/js/settings.js"></script>
    <script src="/gleek/gleek/main/js/gleek.js"></script>
    <script src="/gleek/gleek/main/js/styleSwitcher.js"></script>
    @yield('js')
</body>
</html>