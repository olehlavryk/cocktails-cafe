import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BasicLayout } from "src/layouts/BasicLayout/BasicLayout";
import { Home } from "src/pages/Home/Home";
import { Cocktails } from "src/pages/Cocktails/Cocktails";
import { Cocktail } from "src/pages/Cocktail/Cocktail";
import { NotFound } from "src/pages/NotFound/NotFound";

export const routesConfig = [
    {
        layout: BasicLayout,
        routes: [
            ["/", Home, true],
            ["/cocktails", Cocktails],
            ["/cocktail/:id", Cocktail],
            ["*", NotFound],
        ]
    }
];

export const RoutesGenerator = ({ config }) => (
    <BrowserRouter>
        <Switch>
            {config.map(({ layout: Layout, routes }) => (
                <Route
                    key={routes[0][0]}
                    path={routes.map(([firstEl]) => firstEl)}
                >
                    <Layout>
                        <Switch>
                            {
                                routes.map(([path, Component, exact]) => (
                                    <Route {...{ path, exact }} key={path}>
                                        <Component />
                                    </Route>
                                ))
                            }
                        </Switch>
                    </Layout>
                </Route>
            ))}
        </Switch>
    </BrowserRouter>
);