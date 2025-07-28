/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import { logTypes } from '../../data/data';
import ProfileContext from '../../state/ProfileContext';

import { to12HourTime, toReadableDate } from '../../../../../../lib/func/time';

import useFetcher from '../../../../../../lib/axios/fetcher';
import { getMoney } from '../../../../../../lib/func/money';
import { getColorForLogType, getIconForLogType } from './func';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Activities = () => {
  const { profile } = useContext(ProfileContext);
  const [logType, setLogType] = useState('all');

  const { fetcher } = useFetcher();

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.data.length) return null; // reached the end
    return `/api/web/profile/activity-logs?customer_id=${
      profile.id
    }&loggable_type=${logType}&page=${pageIndex + 1}`; // SWR key
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    size > 0 && data && typeof data[size - 1] === 'undefined';
  const isEmpty = data?.[0]?.data.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data?.length - 1]?.data?.length < 10);
  const isNoMoreProduct = isReachingEnd || data?.[0]?.meta?.total < 11;

  return (
    <div>
      <h2 className="mb-3 text-lg">ACTIVITY LOGS</h2>

      <h3
        id="timeline-title"
        className="w-full text-lg font-medium text-gray-900"
      >
        <select
          onChange={(e) => setLogType(e.target.value)}
          className="w-full pr-10 border-gray-300 rounded-md cursor-pointer focus:outline-none sm:text-sm focus:ring-bermuda-100 hover:border-bermuda-100"
        >
          <option value="all">All Logs</option>
          <option value={logTypes.WALLET.type}>{logTypes.WALLET.name}</option>
          <option value={logTypes.BOOKING.type}>{logTypes.BOOKING.name}</option>
          <option value={logTypes.COURSE.type}>{logTypes.COURSE.name}</option>
          <option value={logTypes.RENT.type}>{logTypes.RENT.name}</option>
          <option value={logTypes.MAINTENANCE.type}>
            {logTypes.MAINTENANCE.name}
          </option>
          <option value={logTypes.TANK_REFILL.type}>
            {logTypes.TANK_REFILL.name}
          </option>
        </select>
      </h3>

      <div className="mt-6">
        <ul role="list" className="-mb-4">
          {!isLoadingInitialData &&
            data?.map((logs) => {
              return (
                logs &&
                logs.data.map((log, logIdx) => (
                  <li key={log.id}>
                    <div className="relative pb-8">
                      {logIdx !== logs.data.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex items-center space-x-3 cursor-pointer">
                        <div>
                          <span
                            className={classNames(
                              getColorForLogType(log.loggable_type),
                              'h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white'
                            )}
                          >
                            {getIconForLogType(log.loggable_type, log.title)}
                          </span>
                        </div>

                        <span className="flex items-center justify-between flex-1 min-w-0 space-x-4">
                          <div>
                            {log.loggable_type === logTypes.WALLET.type ? (
                              <p className="flex flex-col items-start gap-1 text-sm font-normal">
                                <span className="flex items-baseline gap-1 text-black">
                                  <span className="uppercase">{log.title}</span>
                                  <span className="text-xs">
                                    ({getMoney(log.amount)})
                                  </span>
                                </span>
                                <span className="text-xs text-gray-500">
                                  {log.notes || 'No notes'}
                                </span>
                              </p>
                            ) : log.loggable_type ===
                              logTypes.TANK_REFILL_DETAIL.type ? (
                              <p className="flex flex-col items-start gap-1 text-sm font-normal">
                                <span className="flex items-baseline gap-1 text-black">
                                  <span className="uppercase">{log.title}</span>
                                  <span className="text-xs">
                                    ({log.tank_qty})
                                  </span>
                                </span>
                                <span className="text-xs text-gray-500">
                                  {log.notes || 'No notes'}
                                </span>
                              </p>
                            ) : (
                              <p className="flex flex-col items-start gap-1 text-sm font-normal">
                                <span className="text-black uppercase">
                                  {log.title}
                                </span>

                                <span className="text-xs text-gray-500">
                                  {log.notes || 'No notes'}
                                </span>
                              </p>
                            )}
                          </div>
                          <div className="text-sm text-right text-gray-500 whitespace-nowrap">
                            <div className="text-black">
                              {toReadableDate(log.created_at)}
                            </div>
                            <div className="block">
                              {to12HourTime(log.created_at)}
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </li>
                ))
              );
            })}
        </ul>

        {data?.[0]?.data?.length > 0 ? (
          isNoMoreProduct ? (
            ''
          ) : (
            <div className="flex flex-col mt-10 justify-stretch">
              <button
                onClick={() => setSize(size + 1)}
                disabled={isReachingEnd || isLoadingMore}
                type="button"
                className={`inline-flex items-center justify-center -mt-5 mb-3 px-4 py-2 text-xs font-medium border border-transparent rounded-md shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2 ${
                  isReachingEnd
                    ? 'text-gray-1000 bg-gray-300'
                    : 'bg-bermuda-100 hover:bg-bermuda-200 focus:ring-bermuda-200 text-white'
                }`}
              >
                Load more
              </button>
            </div>
          )
        ) : (
          <div className="pt-4 pb-10 text-sm text-center text-gray-400">
            No log found
          </div>
        )}
      </div>
    </div>
  );
};

export default Activities;
