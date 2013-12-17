//
//  LGViewController.m
//  FloodAvoider
//
//  Created by Emanuel Saringan on 12/17/13.
//  Copyright (c) 2013 lambdageek. All rights reserved.
//

#import "LGViewController.h"

@interface LGViewController ()

@end

@implementation LGViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSString *htmlFile = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"];
    NSURL *url = [NSURL fileURLWithPath:htmlFile];
    NSURLRequest *rq = [NSURLRequest requestWithURL:url];
    [self.webView loadRequest:rq];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
