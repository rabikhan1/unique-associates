import Link from "next/link"

export default function Nav () {
    return(<>
        <div className=" booking-nav container  ptb-70">
            <div className="d-flex justify-content-around">

        <div className="booking-options">
                                    <Link href="#">
                                        <a className="btn btn-primary">
                                            1
                                        </a>
                                    </Link>
                                </div>
                                <hr/>
                                <div className="booking-options">
                                    <Link href="/">
                                        <a className="btn btn-primary">
                                            2
                                        </a>
                                    </Link>
                                </div>
                                    <hr/>
                                <div className="booking-options">
                                    <Link href="/">
                                        <a className="btn btn-primary">
                                            3
                                        </a>
                                    </Link>
                                </div>
                                <hr/>
                                {/* <hr className="d-flex justify-content-between"  /> */}
                                <div className="booking-options">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">
                                            4
                                        </a>
                                    </Link>
                                </div>
                                <hr/>
                                <div className="booking-options">
                                    <Link href="/contact">
                                        <a className="btn btn-primary">
                                            5
                                        </a>
                                    </Link>
                                </div>
        </div>
            </div>
        </>
    )
}